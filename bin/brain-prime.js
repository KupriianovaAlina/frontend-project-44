#!/usr/bin/env node
import play from '../src/index.js';
import primeGame from '../src/games/brain-prime.js';

play(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
