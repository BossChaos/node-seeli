'use strict'

/**
 * Returns the inpute type for a command flag
 * @module seeli/lib/usage/type-of
 * @author Eric Satterwhite
 * @since 7.0.0
 * @requires path
 * @requires url
 * @requires mout/lang/kindOf
 * @requires mout/lang/isFunction
 * @example import typeOf from 'seel/lib/lang/type-of'
 * typeOf(Number) // number
 * typeOf(require('url')) // url
 * typeOf(require('path')) // path
 * typeOf([Number]) // number*
 * typeOf([String]) // string*
 **/

import path from 'path'
import url from 'url'
import kindOf from 'mout/lang/kindOf'
import isFunction from 'mout/lang/isFunction'

export default typeOf

function typeOf(thing) {
  /* eslint-disable eqeqeq */
  if (thing == path) {
    return 'path'
  } else if (thing == url) {
    return 'url'
  } else if (typeof thing === 'number' && isNaN(thing)) {
    return 'NaN'
  } else if (Array.isArray(thing)) {
    const clean = thing.filter((item) => {
      return item !== Array
    })
    return typeOf(clean[0]).toLowerCase() + '*'
  } else if (isFunction(thing)) {
    return typeOf(thing()).toLowerCase()
  } else {
    return kindOf(thing).toLowerCase()
  }
  /* eslint-enable eqeqeq */
}
