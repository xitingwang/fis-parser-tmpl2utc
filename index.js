/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var _ = require('underscore');

module.exports = function(content, file, conf){
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };
    
    fis.util.merge(_.templateSettings, conf);
    return _.template(content).source;
};