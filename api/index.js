export default async function handler(req, res) {
  const token = 'vk1.a.xfYvgk5pAE_zv5GxMGI7luvkWCMd2wPIjcvmSWoSH3iGi0wPqJjzOUSQSjqxs9-Rf33rwoSgeyoQcId1zct5y3ilxdIZv_tkxW8L1sgU6O3bYAAyZDEeK_5K1EHz4cb8ZGXNJlUmbCvK0TIN75j2gRjhZT7HUXJbTWKPDx8RH-yO2ob-EmJyiLyS3YL53uwIwNkH30_mi_Hwww5RVDp6xA';
  const groupId = '116712716';
  const count = 10;

  const vkUrl = `https://api.vk.com/method/wall.get?owner_id=-${groupId}&count=${count}&access_token=${token}&v=5.199`;

  const vkRes = await fetch(vkUrl);
  const data = await vkRes.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
