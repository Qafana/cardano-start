#! /usr/bin/env node

import cardanoStart from './commands/cardanoStart.js';

import { Command } from 'commander';

const program = new Command();

program
  .command('init')
  .description('Start/Stop the Cardano Node')
  .action(cardanoStart);

program.parse();
