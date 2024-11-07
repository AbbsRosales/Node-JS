const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8');
/*
readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
});*/

//process.stdout.write('Program Ended\n');

const Transform = stream.Transform;

function UpperCase() {
    Transform.call(this);
}

util.inherits(UpperCase, Transform);

UpperCase.prototype._transform = function(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
}

let upperCase = new UpperCase();

readableStream.pipe(upperCase).pipe(process.stdout);