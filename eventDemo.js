import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const greetingHandler = (name) => {
  console.log(`Hello ${name}`);
};

const farewellHandler = (name) => {
  console.log(`Goodbye ${name}`);
};

// Registering the event handlers
myEmitter.on('greeting', greetingHandler);
myEmitter.on('farewell', farewellHandler);

// Error handling
myEmitter.on('error', (err) => {
  console.error(`Error: ${err}`);
});

// Emitting the events
myEmitter.emit('greeting', 'John');
myEmitter.emit('farewell', 'John');

// Emitting an error
myEmitter.emit('error', new Error('Something went wrong'));
