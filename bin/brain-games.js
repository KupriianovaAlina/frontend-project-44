#!/usr/bin/env node
import askUser from '../src/cli.js';
import isNumberEvenGame from './bin-event.js';

console.log('Welcome to the Brain Games!');
const userName = askUser();

isNumberEvenGame(userName);
