import { readFileSync } from 'fs';
import { join } from 'path';

console.log('hey world');

const content = readFileSync(join(__dirname, 'foo.js'));

if (content.toString() !== '// this is foo.js') {
  throw new Error('Expected output not found')
} else {
  console.log('Success!!!\nExpected output found')
}