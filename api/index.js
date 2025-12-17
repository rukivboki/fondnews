
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
