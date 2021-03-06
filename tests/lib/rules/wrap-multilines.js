/**
 * @fileoverview Prevent missing parentheses around multilines JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var eslint = require('eslint').linter;
var ESLintTester = require('eslint-tester');

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('lib/rules/wrap-multilines', {

    valid: [
        {
            code: '\
              var Hello = React.createClass({\
                render: function() {\
                  return <p>Hello {this.props.name}</p>;\
                }\
              });',
            ecmaFeatures: {
              jsx: true
            }
        }, {
            code: '\
              var Hello = React.createClass({\
                render: function() {\
                  return (\n\
                    <div>\n\
                      <p>Hello {this.props.name}</p>\n\
                    </div>\n\
                  );\
                }\
              });',
            ecmaFeatures: {
              jsx: true
            }
        }, {
            code: 'var hello = <p>Hello</p>;',
            ecmaFeatures: {
              jsx: true
            }
        }, {
            code: '\
              var hello = (\n\
                <div>\n\
                  <p>Hello</p>\n\
                </div>\n\
              );',
            ecmaFeatures: {
              jsx: true
            }
        }, {
            code: '\
              var hello;\
              hello = (\n\
                <div>\n\
                  <p>Hello</p>\n\
                </div>\n\
              );',
            ecmaFeatures: {
              jsx: true
            }
        }
    ],

    invalid: [
        {
            code: '\
              var Hello = React.createClass({\
                render: function() {\
                  return <div>\n\
                    <p>Hello {this.props.name}</p>\n\
                  </div>;\
                }\
              });',
            ecmaFeatures: {
              jsx: true
            },
            errors: [{
                message: 'Missing parentheses around multilines JSX'
            }]
        }, {
            code: '\
              var hello = <div>\n\
                <p>Hello</p>\n\
              </div>;',
            ecmaFeatures: {
              jsx: true
            },
            errors: [{
                message: 'Missing parentheses around multilines JSX'
            }]
        }, {
            code: '\
              var hello;\
              hello = <div>\n\
                <p>Hello</p>\n\
              </div>;',
            ecmaFeatures: {
              jsx: true
            },
            errors: [{
                message: 'Missing parentheses around multilines JSX'
            }]
        }
    ]
});
