
export default async function handler(req, res) {
  const token = process.env.VK_TOKEN;
  const groupId = '116712716';
  const count = 100;

  const url = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&count=${count}&access_token=${token}&v=5.199`;

  const response = await fetch(url);
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
