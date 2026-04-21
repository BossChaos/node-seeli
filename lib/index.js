/**
 * CLI harness module. Comes with free help command
 * @module seeli
 * @author Eric Satterwhite
 * @requires nopt
 * @requires util
 * @requires chaolk
 * @requires os
 * @requires seeli/lib/command
 * @requires seeli/lib/commands
 * @requires seeli/lib/conf
 **/
import chalk from 'chalk'
import Command from './command/index.js'
import Seeli from './seeli.js'
import commands from './commands/index.js'

const colors = [
  'red', 'blue', 'green'
, 'yellow', 'bold', 'grey'
, 'dim', 'black', 'magenta'
, 'cyan', 'redBright', 'blueBright'
, 'greenBright', 'yellowBright', 'cyanBright'
]

export default commands

commands.Seeli = Seeli

Object.defineProperties(commands, {
  Seeli: {
    get: () => {
      return Seeli
    }
  }
, Command: {
    get: () => {
      return Command
    }
  }
, list: {
    get: () => {
      return Array.from(commands.names)
    }
  }
})

colors.forEach((color) => {
  module.exports[color] = chalk[color]
})
