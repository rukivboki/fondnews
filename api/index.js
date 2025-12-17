
/* export default async function handler(req, res) {
  const groupId = '116712716';
  const offset = req.query.offset || 0;
  const count = req.query.count || 5;

  const url = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&offset=${offset}&count=${count}&v=5.199`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
*/
import crypto from "crypto";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const token = (process.env.VK_TOKEN || "").trim();
  if (!token) {
    return res.status(500).json({ error: "VK_TOKEN empty on server" });
  }

  // Безопасный отпечаток токена (хеш), токен не раскрываем
  const tokenSha256 = crypto.createHash("sha256").update(token).digest("hex");

  const groupId = "116712716";
  const offset = String(req.query.offset || 0);
  const count = String(req.query.count || 5);

  const url =
    `https://api.vk.com/method/wall.get?owner_id=-${groupId}` +
    `&offset=${offset}&count=${count}` +
    `&access_token=${encodeURIComponent(token)}` +
    `&v=5.199`;

  const response = await fetch(url);
  const data = await response.json();

  return res.status(200).json({
    token_sha256: tokenSha256,
    vk: data,
  });
}

