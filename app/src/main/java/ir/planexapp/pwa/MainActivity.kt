package ir.planexapp.pwa

import android.content.Intent
import android.content.pm.ApplicationInfo
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.CookieManager
import android.webkit.RenderProcessGoneDetail
import android.webkit.ServiceWorkerClient
import android.webkit.ServiceWorkerController
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.graphics.Insets
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import java.io.ByteArrayInputStream

class MainActivity : ComponentActivity() {

    companion object {
        private const val TAG = "PlanExWebView"
        private const val ASSET_DOMAIN = "appassets.androidplatform.net"
        private const val LOCAL_BASE_URL = "https://$ASSET_DOMAIN/index.html"

        private val ALLOWED_HOSTS = hashSetOf(
            "planexapp.ir",
            "api.planexapp.ir",
            "planexapp.pages.dev",
            "fonts.googleapis.com",
            "fonts.gstatic.com",
            "cdn.jsdelivr.net",
            "telegram.org",
            "api.telegram.org",
            "t.me",
            "telegram.me",
            "hamibash.com"
        )

        private val TELEGRAM_STUB_BYTES = (
            "// PlanEx Android WebView Telegram SDK offline stub\n" +
            "window.Telegram = window.Telegram || { WebApp: { ready: function(){}, expand: function(){}, close: function(){} } };"
        ).toByteArray(Charsets.UTF_8)

        private val EMPTY_CSS_BYTES = "/* offline font fallback */".toByteArray(Charsets.UTF_8)
    }

    private lateinit var webView: WebView
    private lateinit var assetLoader: WebViewAssetLoader

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setupFullscreen()

        // 1. Strict Debugging Control: Disable WebView debugging in production release builds
        val isDebuggable = (applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE) != 0
        WebView.setWebContentsDebuggingEnabled(isDebuggable)

        webView = WebView(this)
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null)
        setContentView(webView)

        ViewCompat.setOnApplyWindowInsetsListener(webView) { v, insets ->
            val systemBars: Insets = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, 0)
            insets
        }

        // 2. WebSettings & Persistence Configuration - Optimized for instant 0ms offline launch
        val settings = webView.settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        settings.allowFileAccess = true
        settings.allowContentAccess = true
        settings.allowFileAccessFromFileURLs = true
        settings.allowUniversalAccessFromFileURLs = true
        settings.javaScriptCanOpenWindowsAutomatically = true

        // Offline and cache optimization
        settings.cacheMode = WebSettings.LOAD_DEFAULT
        settings.loadsImagesAutomatically = true
        settings.blockNetworkImage = false
        settings.mediaPlaybackRequiresUserGesture = false
        settings.savePassword = false
        settings.setGeolocationEnabled(false)

        // Disable Google Safe Browsing checks to eliminate network lookup delay in Iranian network
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.safeBrowsingEnabled = false
        }

        // Enable third-party cookies for smooth sync
        val cookieManager = CookieManager.getInstance()
        cookieManager.setAcceptCookie(true)
        cookieManager.setAcceptThirdPartyCookies(webView, true)

        // 3. Configure WebViewAssetLoader pointing directly to APK assets
        assetLoader = WebViewAssetLoader.Builder()
            .setDomain(ASSET_DOMAIN)
            .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        // 4. Intercept Service Worker requests if active to prevent network blocking
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            try {
                ServiceWorkerController.getInstance().setServiceWorkerClient(object : ServiceWorkerClient() {
                    override fun shouldInterceptRequest(request: WebResourceRequest): WebResourceResponse? {
                        return handleIntercept(request.url)
                    }
                })
            } catch (e: Exception) {
                Log.w(TAG, "ServiceWorkerController initialization skipped: ${e.message}")
            }
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(view: WebView?, request: WebResourceRequest?): WebResourceResponse? {
                val url = request?.url ?: return null
                return handleIntercept(url)
            }

            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return false

                // Handle Telegram, WhatsApp, and generic custom scheme intent links
                if (url.startsWith("tg:") || url.contains("t.me/") || url.startsWith("intent:") || url.startsWith("whatsapp:")) {
                    try {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                        startActivity(intent)
                        return true
                    } catch (e: Exception) {
                        // If Telegram app isn't installed, open in browser
                        val fallbackUrl = url.replace("tg://resolve?domain=", "https://t.me/")
                        try {
                            val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse(fallbackUrl))
                            startActivity(browserIntent)
                            return true
                        } catch (err: Exception) {
                            Log.w(TAG, "Cannot launch fallback URL: $fallbackUrl", err)
                        }
                    }
                }

                val uri = request?.url ?: return false
                val host = uri.host

                // Strict Domain Restriction for in-app WebView
                if (host != null && (ALLOWED_HOSTS.contains(host) || host.endsWith("planexapp.ir") || host == ASSET_DOMAIN)) {
                    return false
                }

                try {
                    val intent = Intent(Intent.ACTION_VIEW, uri)
                    startActivity(intent)
                } catch (e: Exception) {
                    Log.w(TAG, "Cannot launch external URL: $uri", e)
                }
                return true
            }

            override fun onRenderProcessGone(view: WebView?, detail: RenderProcessGoneDetail?): Boolean {
                val didCrash = detail?.didCrash() ?: false
                Log.w(TAG, "WebView render process gone (didCrash=$didCrash)")
                try {
                    view?.destroy()
                } catch (ignored: Exception) {}
                recreate()
                return true
            }

            override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                super.onReceivedError(view, request, error)
                if (request?.isForMainFrame == true) {
                    Log.w(TAG, "Main frame error: ${error?.description}")
                }
            }
        }

        webView.webChromeClient = WebChromeClient()

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (::webView.isInitialized && webView.canGoBack()) {
                    webView.goBack()
                } else {
                    finish()
                }
            }
        })

        // Instantly load the local APK asset index with zero network dependency
        webView.loadUrl(LOCAL_BASE_URL)
    }

    private fun handleIntercept(uri: Uri): WebResourceResponse? {
        val host = uri.host ?: ""
        val path = uri.path ?: ""

        // A. Immediately stub out Telegram WebApp SDK without waiting for blocked connection
        if (host == "telegram.org" || host.endsWith(".telegram.org") || path.endsWith("telegram-web-app.js")) {
            return WebResourceResponse(
                "application/javascript",
                "UTF-8",
                200,
                "OK",
                mapOf("Access-Control-Allow-Origin" to "*"),
                ByteArrayInputStream(TELEGRAM_STUB_BYTES)
            )
        }

        // B. Immediately return empty CSS for Google Fonts & JSDelivr CDN so fallback fonts render instantly without hanging
        if (host == "fonts.googleapis.com" || host == "fonts.gstatic.com" || host == "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net")) {
            return WebResourceResponse(
                "text/css",
                "UTF-8",
                200,
                "OK",
                mapOf("Access-Control-Allow-Origin" to "*"),
                ByteArrayInputStream(EMPTY_CSS_BYTES)
            )
        }

        // C. If request is directed to the live domain (planexapp.ir / planexapp.pages.dev) for static assets,
        // map it directly to the local APK asset loader
        if (host == "planexapp.ir" || host == "www.planexapp.ir" || host == "planexapp.pages.dev") {
            if (path.startsWith("/assets/") || path == "/" || path == "/index.html" ||
                path.endsWith(".png") || path.endsWith(".jpg") || path.endsWith(".svg") ||
                path.endsWith(".css") || path.endsWith(".js") || path.endsWith(".json")) {
                val assetUri = Uri.parse("https://$ASSET_DOMAIN$path")
                val localResponse = assetLoader.shouldInterceptRequest(assetUri)
                if (localResponse != null) return localResponse
            }
        }

        // D. Normal local asset resolution from APK assets folder
        val assetResponse = assetLoader.shouldInterceptRequest(uri)
        if (assetResponse != null) {
            return assetResponse
        }

        return null
    }

    override fun onPause() {
        super.onPause()
        CookieManager.getInstance().flush()
    }

    override fun onStop() {
        super.onStop()
        CookieManager.getInstance().flush()
    }

    override fun onDestroy() {
        super.onDestroy()
        CookieManager.getInstance().flush()
    }

    private fun setupFullscreen() {
        try {
            val window = window
            WindowCompat.setDecorFitsSystemWindows(window, true)
            window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
            window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)
            window.addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
            window.statusBarColor = Color.parseColor("#0F172A")
            window.navigationBarColor = Color.parseColor("#0F172A")
            val controller = WindowInsetsControllerCompat(window, window.decorView)
            controller.isAppearanceLightStatusBars = false
            controller.isAppearanceLightNavigationBars = false
        } catch (e: Exception) {
            Log.w(TAG, "Could not set insets", e)
        }
    }
}
