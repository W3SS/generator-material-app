/**
 * An module for defining and initializing the <%= modelName %> model.
 * Exporting the <%= modelName %> model definition, schema and model instance.
 * @module {Object} <%= name %>:model
 * @property {Object} definition - The [definition object]{@link <%= name %>:model~<%= modelName %>Definition}
 * @property {MongooseSchema} schema - The [mongoose model schema]{@link <%= name %>:model~<%= modelName %>Schema}
 * @property {MongooseModel} model - The [mongoose model]{@link <%= name %>:model~<%= modelName %>}
 */
'use strict';

var mongoose = require('mongoose');<% if (secure) { %>
var requestContext = require('mongoose-request-context');
var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;<% } %>

/**
 * The <%= modelName %> model definition
 * @type {Object}
 * @property {String} name - The name of this <%= name %>
 * @property {String} info - Details about this <%= name %>
 * @property {Boolean} active - Flag indicating this <%= name %> is active
 */
var <%= modelName %>Definition = {
	name: String,
	info: String,
	active: Boolean
};

/**
 * The <%= modelName %> model schema
 * @type {MongooseSchema}
 */
var <%= modelName %>Schema = new mongoose.Schema(<%= modelName %>Definition);<% if (secure) { %>

/**
 * Attach security related plugins
 */
<%= modelName %>Schema.plugin(createdModifiedPlugin);

<%= modelName %>Schema.plugin(requestContext, {
	propertyName: 'modifiedBy',
	contextPath: 'request:acl.user.name'
});<% } %>

/**
 *  The registered mongoose model instance of the <%= modelName %> model
 *  @type {<%= modelName %>}
 */
var <%= modelName %> = mongoose.model('<%= modelName %>', <%= modelName %>Schema);

module.exports = {

	/**
	 * The <%= modelName %> model definition object
	 * @type {Object}
	 * @see <%= name %>:<%= modelName %>Model~<%= modelName %>Definition
	 */
	definition: <%= modelName %>Definition,

	/**
	 * The <%= modelName %> model schema
	 * @type {MongooseSchema}
	 * @see <%= name %>:model~<%= modelName %>Schema
	 */
	schema: <%= modelName %>Schema,

	/**
	 * The <%= modelName %> model instance
	 * @type {<%= name %>:model~<%= modelName %>}
	 */
	model: <%= modelName %>

};

