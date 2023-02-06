#!/usr/bin/env node
import play from '../src/index.js';
import calcGame from '../src/games/brain-calc.js';

play(calcGame, 'What is the result of the expression?');
