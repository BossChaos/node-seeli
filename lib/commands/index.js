'use strict'
/**
 * Command registry for seeli
 * @module index.js
 * @author Eric Satterwhite
 * @since 0.0.1
 * @requires seeli/conf
 * @requires seeli/lib/seeli
 */

import help from './help'
import Seeli from .js'../seeli'
const instance = new Seeli()

instance.use(help)
export default instance
