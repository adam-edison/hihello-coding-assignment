import { question } from 'readline-sync';
import { output } from './output';

const answer = question('Numbers only \n> ', { limit: /^[0-9]+$/ });

output(`You gave me "${answer}"`);
