import { ts } from 'ts-node';
import { readFileSync } from 'fs';

const filePath = "./EssayProject.ts";
const code = readFileSync(filePath, 'utf8');
console.log(code);