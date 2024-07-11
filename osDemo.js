import os from 'os';

// User Info
console.log(os.userInfo());

// total memory
console.log(os.totalmem().toLocaleString());

// free memory
console.log(os.freemem().toLocaleString());

// cpus
console.log(os.cpus());

// ip address
console.log(os.networkInterfaces());
