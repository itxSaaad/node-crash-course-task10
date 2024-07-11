// process.argv
console.log(process);
console.log(process.argv);

// process.env
console.log(process.env);
console.log(process.env.USERNAME);

// process.pid
console.log(process.pid);

// process.cwd
console.log(process.cwd());

// process.title
console.log(process.title);

// process.memoryUsage
console.log(process.memoryUsage());

// process.uptime
console.log(process.uptime());

// process.on
process.on('exit', () => {
  console.log(
    `Process will exit now with code ${process.exitCode}. See you later!`
  );
});

// process.exit
process.exit(0);
