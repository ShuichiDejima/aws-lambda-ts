"use strict";
var request = require("request");
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! No Weather!'),
    };
    return response;
};