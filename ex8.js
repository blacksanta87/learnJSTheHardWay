let first, second, third, fourth;

[first, second, third, fourth] = [1, 2, 3, 4];
console.log(`${first} ${second} ${third} ${fourth}`);

[first, second, third, fourth] = ['one', 'two', 'three', 'four'];
console.log(`${first} ${second} ${third} ${fourth}`);

[first, second, third, fourth] = [true, false, true, false];
console.log(`${first} ${second} ${third} ${fourth}`);

[first, second, third, fourth] = [
  'I had this thing.', 
  'That you could type up right.',
  'But it did\'t sing.',
  'So I said goodnight.'
]
console.log(`${first} ${second} ${third} ${fourth}`);