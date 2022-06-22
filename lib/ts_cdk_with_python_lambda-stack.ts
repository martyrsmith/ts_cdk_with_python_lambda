import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PythonFunction } from "@aws-cdk/aws-lambda-python-alpha";
import { aws_apigateway as apigw, aws_lambda as lambda } from "aws-cdk-lib";


export class TsCdkWithPythonLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const myPython = new PythonFunction(this, 'MyPythonHandler', {
      entry: './lambda_python',  // Folder containing lambda
      runtime: lambda.Runtime.PYTHON_3_9,  // Python version
      index: 'main.py',  // Name of Python file
      handler: 'handler'  // Name of method
    });

    // API Gateway Python2
    new apigw.LambdaRestApi(this, 'MyPythonEndpoint', {
      handler: myPython
    })
  }
}
