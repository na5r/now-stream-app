// api/get-movies.js
export default async function handler(req, res) {
  const apiKey = process.env.REAL_DEBRID_API_KEY; // It grabs your secret key here
  
  // Now your server uses the key to talk to Torrentio/Real-Debrid
  const response = await fetch(`https://your-torrentio-api-url-here?key=${apiKey}`);
  const data = await response.json();
  
  res.status(200).json(data);
}
