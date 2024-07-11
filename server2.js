import { createServer } from 'http';

const PORT = process.env.PORT || 5000;

const user = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const jsonMiddleware = (req, res, next) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    if (data) {
      req.body = JSON.parse(data);
    }
    next();
  });
};

const getUserHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(user));
  res.end();
};

const getUserByIdHandler = (req, res) => {
  const id = req.url.split('/')[3];
  const found = user.find((u) => u.id === parseInt(id));
  if (found) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(found));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'User Not Found' }));
  }
  res.end();
};

const createUserHandler = (req, res) => {
  //   let body = '';

  //   req.on('data', (chunk) => {
  //     body += chunk.toString();
  //   });

  //   req.on('end', () => {
  //     const newUser = JSON.parse(body);
  //     user.push(newUser);
  //     res.writeHead(201, { 'Content-Type': 'application/json' });
  //     res.write(JSON.stringify(newUser));
  //     res.end();
  //   });
  const newUser = req.body;

  user.push(newUser);
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(newUser));
  res.end();
};

const notFoundHandler = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ message: 'Route Not Found' }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUserHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === 'GET'
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
