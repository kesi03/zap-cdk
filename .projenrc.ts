import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kester Simm',
  authorAddress: '68278724+kesi03@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'zap-cdk',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kesi03/zap-cdk',
  bundledDeps: [
    'js-yaml', // Add js-yaml as a dependency
  ],
  devDeps: ['@types/js-yaml'],
  publishToMaven: {
    javaPackage: 'io.github.kesi03.zap.cdk',
    mavenArtifactId: 'zap-cdk',
    mavenGroupId: 'io.github.kesi03', // Replace with your actual profile ID
    mavenServerId: 'central-ossrh', // Replace with your actual server ID
  },
  publishToPypi: {
    distName: 'zap-cdk',
    module: 'zap_cdk',
  },
  publishToNuget: {
    dotNetNamespace: 'com.mockholm.zap.cdk',
    packageId: 'com.mockholm.zap.cdk',
  },
  publishToGo: {
    moduleName: 'github.com/kesi03/zap-cdk-go',
    packageName: 'zapcdk',
  },
});
project.synth();