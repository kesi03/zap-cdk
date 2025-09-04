// test/my-environment-construct.test.ts
import * as cdk from 'aws-cdk-lib';
import { EnvironmentConfig } from '../src/constructs/environment'; // Adjust the path as necessary
import { IEnvironment } from '../src/models/environment'; // Adjust the path as necessary
describe('EnvironmentConfig', () => {
  let app: cdk.App;
  let stack: cdk.Stack;

  beforeEach(() => {
    app = new cdk.App();
    stack = new cdk.Stack(app, 'TestStack');
  });

  test('should create an environment construct with valid configuration', () => {
    const environmentConfig: IEnvironment = {
      contexts: [
        {
          name: 'TestContext',
          urls: ['http://example.com'],
          authentication: {
            method: 'http',
            parameters: {
              hostname: 'example.com',
              port: 80,
              realm: 'exampleRealm',
            },
            verification: {
              method: 'response',
              loggedInRegex: '.*logged in.*',
            },
          },
          sessionManagement: {
            method: 'cookie',
            parameters: {},
          },
          technology: {
            include: ['Node.js', 'Express'],
          },
          structure: {
            structuralParameters: ['param1', 'param2'],
            dataDrivenNodes: [
              {
                name: 'Node1',
                regex: '(.*)',
              },
            ],
          },
          users: [
            {
              name: 'User1',
              credentials: [
                {
                  username: 'user1',
                  password: 'password1',
                },
              ],
            },
          ],
        },
      ],
      vars: {
        key: 'value',
      },
      parameters: {
        failOnError: true,
        continueOnFailure: false,
      },
      proxy: {
        hostname: 'proxy.example.com',
        port: 8080,
      },
    };

    const environmentConstruct = new EnvironmentConfig(stack, 'MyEnvironment', {
      environment: environmentConfig,
    });


    // Add assertions to verify the construct was created correctly
    expect(environmentConstruct).toBeDefined();
  });
});
