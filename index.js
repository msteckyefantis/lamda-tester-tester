'use strict';

function lambdaFunction( event, context, callback ) {

    if( process.env.LOG ) {

        console.log( 'The event:', event );

        // lambda tester simulates the context
        console.log( 'The context:', context );

        /*
            to use envrionment variables in your test:
            put a .env file at the root folder of this project
        */
        console.log( 'Environment variables:', process.env );
    }


    callback( null, 'function completed successfully' );
}

module.exports = { lambdaFunction };

/*
    Note:
        for this Lambda Function to work online,
        you need to set exports.handler = lambdaFunction
*/
