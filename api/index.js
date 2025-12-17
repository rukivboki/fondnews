
//export default async function handler(req, res) {
  //const groupId = '116712716';
  //const offset = req.query.offset || 0;
  //const count = req.query.count || 5;

//  const url = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&offset=${offset}&count=${count}&v=5.199`;

//  const response = await fetch(url);
//  const data = await response.json();

//  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.status(200).json(data);
//}
export default async function handler(req, res) {
  const token = (process.env.VK_TOKEN || "").trim();
  const groupId = "116712716";
  const offset = req.query.offset || 0;
  const count = req.query.count || 5;

  // Диагностика: есть ли токен вообще
  if (!token) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({
      message: "VK_TOKEN is missing in Vercel Environment Variables (Production) or redeploy not done",
    });
  }

  const url =
    `https://api.vk.com/method/wall.get?` +
    `owner_id=-${groupId}&offset=${offset}&count=${count}` +
    `&access_token=${encodeURIComponent(token)}&v=5.199`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

