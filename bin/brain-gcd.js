#!/usr/bin/env node
import play from '../src/index.js';
import gcdGame from '../src/games/brain-gcd.js';

play(gcdGame, 'Find the greatest common divisor of given numbers.');
