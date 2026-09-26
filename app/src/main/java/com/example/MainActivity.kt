package com.example

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Color
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.WindowManager
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader

class MainActivity : ComponentActivity() {

    private var webView: WebView? = null
    private var assetLoader: WebViewAssetLoader? = null

    companion object {
        private const val TAG = "PlanExWebView"
        private const val ASSET_DOMAIN = "appassets.androidplatform.net"
        private const val LOCAL_BASE_URL = "https://appassets.androidplatform.net/index.html"

        private val ALLOWED_HOSTS = setOf(
            "planexapp.ir",
            "fonts.googleapis.com",
            "fonts.gstatic.com",
            "cdn.jsdelivr.net"
        )
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Enable WebView debugging for remote debugging via chrome://inspect
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                WebView.setWebContentsDebuggingEnabled(true)
            }
        } catch (e: Throwable) {
            Log.w(TAG, "Could not enable WebView debugging", e)
        }

        try {
            // 1. Create WebView instance safely
            val wv = WebView(this).apply {
                setBackgroundColor(Color.parseColor("#0F172A"))
                overScrollMode = View.OVER_SCROLL_NEVER
            }
            this.webView = wv

            // 2. Set content view IMMEDIATELY so decorView is attached to window
            setContentView(wv)

            // 3. Apply Fullscreen / Insets AFTER setContentView inside safe block
            setupFullscreen()

            // 4. Setup WebViewAssetLoader for Vite ES Modules
            val loader = WebViewAssetLoader.Builder()
                .setDomain(ASSET_DOMAIN)
                .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
                .build()
            this.assetLoader = loader

            // 5. Configure WebSettings
            wv.settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                allowFileAccess = true
                allowContentAccess = true
                mediaPlaybackRequiresUserGesture = false
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                cacheMode = if (isNetworkAvailable()) {
                    WebSettings.LOAD_DEFAULT
                } else {
                    WebSettings.LOAD_CACHE_ELSE_NETWORK
                }
                userAgentString = "$userAgentString PlanExAndroid/1.0"
                setSupportZoom(false)
                builtInZoomControls = false
                displayZoomControls = false
                loadWithOverviewMode = true
                useWideViewPort = true
                textZoom = 100
            }

            // 6. Setup WebViewClient
            wv.webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView?,
                    request: WebResourceRequest?
                ): WebResourceResponse? {
                    val url = request?.url ?: return null
                    if (url.host == ASSET_DOMAIN) {
                        return loader.shouldInterceptRequest(url)
                    }
                    return super.shouldInterceptRequest(view, request)
                }

                override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                    super.onPageStarted(view, url, favicon)
                    Log.d(TAG, "Loading: $url")
                }

                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)
                    Log.d(TAG, "Finished: $url")
                }

                override fun shouldOverrideUrlLoading(
                    view: WebView?,
                    request: WebResourceRequest?
                ): Boolean {
                    val url = request?.url ?: return false
                    val host = url.host ?: return false

                    if (host == ASSET_DOMAIN) return false
                    if (ALLOWED_HOSTS.any { host.endsWith(it) }) return false

                    try {
                        startActivity(Intent(Intent.ACTION_VIEW, url))
                    } catch (_: Throwable) { }
                    return true
                }

                override fun onReceivedError(
                    view: WebView?,
                    request: WebResourceRequest?,
                    error: WebResourceError?
                ) {
                    if (request?.isForMainFrame == true) {
                        Log.e(TAG, "Main frame error: ${error?.description}")
                    }
                }
            }

            // 7. Setup WebChromeClient
            wv.webChromeClient = object : WebChromeClient() {
                override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                    consoleMessage?.let {
                        Log.d(TAG, "[JS ${it.messageLevel()}] ${it.message()} (${it.sourceId()}:${it.lineNumber()})")
                    }
                    return true
                }
            }

            // 8. Load URL
            wv.loadUrl(LOCAL_BASE_URL)

        } catch (e: Throwable) {
            Log.e(TAG, "Fatal error initializing WebView app", e)
            showFallbackError(e)
        }
    }

    private fun setupFullscreen() {
        try {
            WindowCompat.setDecorFitsSystemWindows(window, false)
            window.statusBarColor = Color.TRANSPARENT
            window.navigationBarColor = Color.TRANSPARENT
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                window.attributes.layoutInDisplayCutoutMode =
                    WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
            }
            val decor = window.decorView
            val controller = WindowInsetsControllerCompat(window, decor)
            controller.hide(WindowInsetsCompat.Type.systemBars())
            controller.systemBarsBehavior =
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        } catch (t: Throwable) {
            Log.w(TAG, "Could not set immersive fullscreen", t)
        }
    }

    private fun showFallbackError(e: Throwable) {
        try {
            val fallbackWv = WebView(this)
            fallbackWv.setBackgroundColor(Color.parseColor("#0F172A"))
            setContentView(fallbackWv)
            val html = """
                <!DOCTYPE html>
                <html dir="rtl" lang="fa">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body { background: #0F172A; color: #fff; font-family: system-ui, sans-serif; padding: 30px; text-align: center; direction: rtl; }
                    .card { background: #1E293B; border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); max-width: 400px; margin: 40px auto; }
                    h2 { color: #F87171; margin-top: 0; }
                    p { color: #94A3B8; font-size: 14px; line-height: 1.6; }
                    .err { font-size: 11px; color: #64748B; background: #0F172A; padding: 10px; border-radius: 8px; font-family: monospace; word-break: break-all; margin-top: 15px; }
                    button { background: #7C3AED; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; cursor: pointer; margin-top: 15px; }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <h2>⚠️ خطای راه‌اندازی برنامه</h2>
                    <p>برنامه با مشکلی مواجه شد. لطفاً برنامه را ببندید و مجدداً تلاش کنید.</p>
                    <div class="err">${e.localizedMessage ?: e.message ?: "Unknown Exception"}</div>
                    <button onclick="location.reload()">تلاش مجدد</button>
                  </div>
                </body>
                </html>
            """.trimIndent()
            fallbackWv.loadDataWithBaseURL(null, html, "text/html", "UTF-8", null)
        } catch (_: Throwable) {
            // Last resort
        }
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        val wv = webView
        if (wv != null && wv.canGoBack()) {
            wv.goBack()
        } else {
            @Suppress("DEPRECATION")
            super.onBackPressed()
        }
    }

    override fun onResume() {
        super.onResume()
        try { webView?.onResume() } catch (_: Throwable) {}
    }

    override fun onPause() {
        try { webView?.onPause() } catch (_: Throwable) {}
        super.onPause()
    }

    override fun onDestroy() {
        try {
            webView?.destroy()
            webView = null
        } catch (_: Throwable) {}
        super.onDestroy()
    }

    private fun isNetworkAvailable(): Boolean {
        return try {
            val cm = getSystemService(CONNECTIVITY_SERVICE) as? ConnectivityManager ?: return false
            val network = cm.activeNetwork ?: return false
            val caps = cm.getNetworkCapabilities(network) ?: return false
            caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
        } catch (_: Throwable) {
            false
        }
    }
}
