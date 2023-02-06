#!/usr/bin/env node
import play from '../src/index.js';
import progressionGame from '../src/games/brain-progression.js';

play(progressionGame, 'What number is missing in the progression?');
