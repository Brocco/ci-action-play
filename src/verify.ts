import { readFileSync } from 'fs';
import { join } from 'path';

console.log('hey world');

const content = readFileSync(join(__dirname, 'foo.js'));

if (content.toString().indexOf('// this is foo.js') === -1) {
  throw new Error('Expected output not found')
} else {
  console.log('Success!!!\nExpected output found')
}