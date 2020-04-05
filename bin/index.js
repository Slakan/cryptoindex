#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage the API Key -> https://nomics.com')
    .command('check', 'Get information about coin')
    .parse(process.argv)