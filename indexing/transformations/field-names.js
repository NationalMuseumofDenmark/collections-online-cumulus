'use strict';

var assetMapping = require('collections-online/lib/asset-mapping.js');

module.exports = function(state, metadata) {
  var transformedMetadata = assetMapping.transform(metadata);
  // The catalog will be removed when formatting.
  transformedMetadata.catalog = metadata.catalog;
  return transformedMetadata;
};