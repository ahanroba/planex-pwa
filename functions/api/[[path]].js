// Cloudflare Pages Function: Wildcard Forwarder for /api/*
export async function onRequest(context) {
  const jsonHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, *'
  };

  try {
    let res = null;
    if (context.env.PLANEX_WORKER) {
      res = await context.env.PLANEX_WORKER.fetch(context.request);
    } else {
      const url = new URL(context.request.url);
      const targetUrl = `https://planex-social-api.mosilotfi78.workers.dev${url.pathname}${url.search}`;
      const newReq = new Request(targetUrl, context.request);
      res = await fetch(newReq);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok || contentType.includes('text/html')) {
      return new Response(JSON.stringify({
        success: false,
        error: 'SERVICE_UNAVAILABLE',
        message: 'سرویس موقتاً در دسترس نیست'
      }), {
        status: res.status >= 400 ? res.status : 502,
        headers: jsonHeaders
      });
    }

    return res;
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: 'SERVICE_UNAVAILABLE',
      message: 'سرویس موقتاً در دسترس نیست'
    }), {
      status: 502,
      headers: jsonHeaders
    });
  }
}

