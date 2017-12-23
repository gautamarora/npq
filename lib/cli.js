'use strict'

const yargs = require('yargs')

const argv = yargs
  .version()
  .usage('Usage: npq install <package> [options]')
  .help('help')
  .alias('help', 'h')
  .command({
    command: 'install <package...>',
    aliases: ['i', 'add'],
    desc: 'install a package'
  })
  .command({
    command: '--packageManager [packageManager]',
    aliases: ['--pkgMgr'],
    desc: 'the package manager to offload handling the command',
    builder: yargs => yargs.default('packageManager', 'npm')
  })
  .example('npq install express')
  .epilogue('curated by Liran Tal at https://github.com/lirantal/npq').argv

module.exports = argv