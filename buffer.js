// Los buffer nos permiten trabajar con datos binarios

//let buffer = Buffer.alloc(1);
//let buffer = Buffer.from([1, 2, 3, 4, 5]);
//let buffer = Buffer.from('Hola mundo', 'utf-8');

//console.log(buffer);
//console.log(buffer.toString());

let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());