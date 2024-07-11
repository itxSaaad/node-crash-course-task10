// import fs from 'fs';

// fs.readFile() -  Callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// fs.readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// fs.writeFile() - Callback
// fs.writeFile('./test.txt', 'Hello World!', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File written successfully');
// });

// fs.writeFileSync() - Synchronous version
// fs.writeFileSync('./test.txt', 'Hello World!');
// console.log('File written successfully');

// fs.appendFile() - Callback
// fs.appendFile('./test.txt', '\nHello World Again!', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File appended successfully');
// });

// fs.appendFileSync() - Synchronous version
// fs.appendFileSync('./test.txt', '\nHello World Again!');
// console.log('File appended successfully');

import fs from 'fs/promises';

// fs.readFile() - Promise .then() .catch()
fs.readFile('./test.txt', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

// fs.readFile() - Async/Await
const readData = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

readData();

// fs.writeFile() - Promise .then() .catch()
fs.writeFile('./test.txt', 'Hello World!')
  .then(() => {
    console.log('File written successfully');
  })
  .catch((err) => {
    console.error(err);
  });

// fs.writeFile() - Async/Await
const writeData = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello World!');
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
  }
};

writeData();

// fs.appendFile() - Promise .then() .catch()
fs.appendFile('./test.txt', '\nHello World Again!')
  .then(() => {
    console.log('File appended successfully');
  })
  .catch((err) => {
    console.error(err);
  });

// fs.appendFile() - Async/Await
const appendData = async () => {
  try {
    await fs.appendFile('./test.txt', '\nHello World Again!');
    console.log('File appended successfully');
  } catch (err) {
    console.error(err);
  }
};

appendData();
