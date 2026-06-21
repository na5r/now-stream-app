export default async function handler(req, res) {
  const apiKey = process.env.REAL_DEBRID_API_KEY;
  // Replace the URL below with your actual Torrentio/Real-Debrid link
  const response = await fetch(`https://torrentio.strem.fun/providers=yts,eztv,rarbg,1337x,thepiratebay,kickasstorrents,torrentgalaxy,magnetdl,horriblesubs,nyaasi,tokyotosho,anidex|qualityfilter=cam,unknown,scr,480p|alldebrid=Dd20ziMZLWFKHcAv67zY/manifest.json`);
  const data = await response.json();
  res.status(200).json(data);
}
