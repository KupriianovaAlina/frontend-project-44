#!/usr/bin/env node
import play from '../src/index.js';
import isEvenGame from '../src/games/brain-even.js';

play(isEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
