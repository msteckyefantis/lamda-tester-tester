'use strict';

function lambdaFunction( event, context, callback ) {

    console.log( 'The event:', event );

    console.log( 'The context:', context );

    console.log( 'Environment variables:', process.env );

    callback( null, 'function completed successfully' );
}

module.exports = { lambdaFunction };

/*
    Note:
        for this Lambda Function to work online,
        you need to set exports.handler = lambdaFunction
*/
