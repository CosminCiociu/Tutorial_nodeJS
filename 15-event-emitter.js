const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data recived with the ${name} and the id ${id}`);
});

customEmitter.on('response', () => {
    console.log(`procces data`);
});


customEmitter.emit('response', 'john', 34);

// customEmitter.on('response', () => {
//     console.log(`procces data`);
// });
