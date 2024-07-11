import url from 'url';
import path from 'path';

const filePath = '/dir1/dir2/file.txt';

console.log(path.basename(filePath)); // file.txt

console.log(path.dirname(filePath)); // /dir1/dir2

console.log(path.extname(filePath)); // .txt

console.log(path.parse(filePath)); // { root: '/', dir: '/dir1/dir2', base: 'file.txt', ext: '.txt', name: 'file' }

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename); // /pathDemo.js
console.log(__dirname); // /

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'file.txt');

console.log(filePath2); // /dir1/dir2/file.txt
