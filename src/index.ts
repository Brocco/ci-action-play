import { writeFileSync } from 'fs';
import { join } from 'path';

console.log('hey world');

writeFileSync(join(__dirname, 'foo.js'), '// this is foo.js')