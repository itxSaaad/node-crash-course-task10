import fs from 'fs/promises';
import http from 'http';
import path from 'path';
import url from 'url';

const PORT = process.env.PORT || 5000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filePath;
      if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about.html') {
        filePath = path.join(__dirname, 'public', 'about.html');
      } else if (req.url === '/contact.html') {
        filePath = path.join(__dirname, 'public', 'contact.html');
      } else {
        filePath = path.join(__dirname, 'public', '404.html');
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    } else {
      throw new Error('Method not allowed');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
