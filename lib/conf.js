/**
 * @module conf
 * @description Seeli CLI framework module
 */

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
'use strict'

import path from 'path'
import {packageUpSync} from 'package-up'
import set from 'mout/object/set'
import get from 'mout/object/get'
import isObject from 'mout/lang/isPlainObject'
import debug from 'debug'('seeli:conf')
const CWD = process.cwd()
const filename = process.argv[1]

const name = filename
  ? path.basename(filename, '.js')
  : 'seeli'

let config = {
  color: 'green'
, name: name
, help: path.resolve(path.join(__dirname, 'commands', 'help'))
, exitOnError: false
, exitOnContent: false
, exitOnCancel: true
, theme: {}
}

try {
  const cwd = get(require, 'main.path') || CWD
  const pkgjson = packageUpSync({cwd})
  debug('loading configuration from %s', pkgjson)
  const pkg = require(pkgjson)
  const override = pkg.seeli || {}
  const help = resolveHelp(override.help, cwd)
  config = {
    ...config
  , ...override
  , help: help
  }
} catch (e) {
  debug('unable to load configuration. using config', e)
}

export default {
  get: (key) => {
    return get(config, key)
  }

, set: (key, value) => {
    if (!isObject(key)) return set(config, key, value)

    for (const [k, v] of Object.entries(key)) {
      set(config, k, v)
    }
  }
}

function resolveHelp(location, cwd) {
  if (!location) return config.help
  if (path.isAbsolute(location)) return config.help
  return path.join(cwd, location)
}
