'use strict';

const expect = require( 'chai' ).expect;

const lambdaFunction = require( '../' ).lambdaFunction;

const LambdaTester = require( 'lambda-tester' );

describe( 'index.js', function() {

    it( 'lambdaFunction', function() {

        let event = {

            eventKey: 'event value'
        };

        return LambdaTester( lambdaFunction )
            .event( event )
            .expectResult( function( result ) {

                expect( result ).to.equal( 'function completed successfully' );
            });
    });
});
