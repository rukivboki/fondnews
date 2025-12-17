
export default async function handler(req, res) {
  const groupId = '116712716';
  const offset = req.query.offset || 0;
  const count = req.query.count || 5;

  const url = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&offset=${offset}&count=${count}&v=5.199`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const token = (process.env.VK_TOKEN || "").trim();
  if (!token) {
    return res.status(500).json({
      error: { error_code: 500, error_msg: "VK_TOKEN is empty on server. Check Vercel Env (Production) + Redeploy." }
    });
  }

  const groupId = "116712716";
  const offset = Number(req.query.offset || 0);
  const count = Number(req.query.count || 5);

  const url = new URL("https://api.vk.com/method/wall.get");
  url.searchParams.set("owner_id", `-${groupId}`);
  url.searchParams.set("offset", String(offset));
  url.searchParams.set("count", String(count));
  url.searchParams.set("access_token", token);
  url.searchParams.set("v", "5.199");

  const response = await fetch(url.toString());
  const data = await response.json();

  return res.status(200).json(data);
}
