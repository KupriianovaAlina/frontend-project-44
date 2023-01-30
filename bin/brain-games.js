#!/usr/bin/env node
import askUser from '../src/cli.js';
import isNumberEvenGame from './games/bin-event.js';
import calcGame from './games/bin-calc.js';

console.log('Welcome to the Brain Games!');
const userName = askUser();

isNumberEvenGame(userName);
calcGame(userName);
