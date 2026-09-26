const DEFAULT_AVATAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <circle cx="64" cy="64" r="64" fill="#1f2029"/>
  <circle cx="64" cy="46" r="22" fill="#a1a1aa"/>
  <path d="M64 74c-22 0-40 14-44 32a64 64 0 0 0 88 0c-4-18-22-32-44-32z" fill="#a1a1aa"/>
</svg>`;

export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const filePath = url.searchParams.get('path');
  
  const fallbackResponse = () => new Response(DEFAULT_AVATAR_SVG, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*'
    }
  });

  if (!filePath) {
    return fallbackResponse();
  }

  const cleanPath = decodeURIComponent(filePath);
  const botToken = '8876966010:AAFzcwScCGOR86egf0tNoYP5KD08rHoUuEM';
  const tgUrl = `https://api.telegram.org/file/bot${botToken}/${cleanPath}`;

  try {
    const tgRes = await fetch(tgUrl);
    if (!tgRes.ok) {
      return fallbackResponse();
    }

    const contentType = tgRes.headers.get('content-type') || 'image/jpeg';
    return new Response(tgRes.body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=604800, immutable',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return fallbackResponse();
  }
}

