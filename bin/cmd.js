#!/usr/bin/env node

var repo = require('../')
  , args = process.argv.splice(2)

if (!args.length) {
  help(1)
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

function help(code) {
  console.log()
  console.log(' usage: gitrepo <repository>')
  console.log()
  process.exit(code || 0)
}
