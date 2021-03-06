'use strict'

const fp = require('fastify-plugin')
const path = require('path')
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async (fastify) => {
	fastify.register(require('fastify-static'), {
		root: path.join(__dirname, '..', 'static'),
		prefix: '/', // optional: default '/'
	})
})
