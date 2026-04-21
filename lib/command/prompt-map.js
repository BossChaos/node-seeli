/**
 * @module prompt-map
 * @description Seeli CLI framework module
 */

'use strict'

import {checkbox, confirm, input, number, password, select} from '@inquirer/prompts'

export default new Map([
  ['checkbox', checkbox]
, ['confirm', confirm]
, ['input', input]
, ['number', number]
, ['password', password]
, ['select', select]
, ['multiselect', checkbox]
, ['text', input]
])
