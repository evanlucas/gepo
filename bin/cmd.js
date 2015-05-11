#!/usr/bin/env node

var repo = require('../')
  , args = process.argv.splice(2)
  , help = require('help')()

if (!args.length) {
  return help(1)
}

var command = args.shift()

switch (command) {
  case 'help':
  case '-h':
  case '--help':
    help(0)
    break
  default:
    console.log(repo(command))
}
