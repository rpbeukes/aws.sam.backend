### Prerequisites
- [Installing the AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

- [Installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

### Commands

## Build:

`sam build`

This command outputs directory: `.aws-sam/build`.
You also want to package and publish from directory `.aws-sam/build`.

If you run `sam package` and `sam publish` from your `sam-app` directory, you might end up with test code in your lambda - not cool :)

## Package:

- create a bucket for the packaged code

`aws s3 mb s3://{YourBucketName}`

```javascript
aws s3 --profile Ruan --region ap-southeast-2 mb s3://aws-workshop-ruan
```

```javascript
sam package --profile Ruan --region ap-southeast-2 --template-file template.yaml --output-template-file packaged.yaml --s3-bucket aws-workshop-ruan
```

After this command I got this from terminal:

```
Successfully packaged artifacts and wrote output template to file packaged.yaml.
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file /Users/ruanbeukes/repos/sas-frontend/backend/sam-app/packaged.yaml --stack-name <YOUR STACK NAME>
```

### Deploy:

#### SAM Cli
```
sam deploy --profile Ruan --region ap-southeast-2 --template-file ./packaged.yaml --stack-name AWSWorkshopRuan --capabilities CAPABILITY_IAM
```

#### AWS Cli
```
aws cloudformation deploy --profile Ruan --region ap-southeast-2 --template-file packaged.yaml --stack-name AWSWorkshopRuan --capabilities CAPABILITY_IAM
```

At first I tried it without the `--capabilities CAPABILITY_IAM`:

```
aws cloudformation deploy --profile Ruan --region ap-southeast-2 --template-file packaged.yaml --stack-name AWSWorkshopRuan
```

and got this error:
```
Waiting for changeset to be created..

Failed to create the changeset: Waiter ChangeSetCreateComplete failed: Waiter encountered a terminal failure state Status: FAILED. Reason: Requires capabilities : [CAPABILITY_IAM]
```
##### Cloudformation describe-stacks:
```yaml
aws cloudformation --profile Ruan --region ap-southeast-2 describe-stacks --stack-name AWSWorkshopRuan --query 'Stacks[].Outputs[?OutputKey==`HelloWorldApi`]'

# Or print to table
aws cloudformation --profile Ruan --region ap-southeast-2 describe-stacks --stack-name AWSWorkshopRuan --query 'Stacks[].Outputs[?OutputKey==`HelloWorldApi`]' --output table
```

### Publish 
`sam publish --profile Ruan --region ap-southeast-2`

**Note**: Add metadata to `template.yaml`

```yaml
Metadata:
  AWS::ServerlessRepo::Application:
    Name: AWSWorkshopRuan
    Description: hello world
    Author: Ruan Beukes 
```

The `publish` will end up creating a `Serverless Application Repository`.

### Automate - Build, Package and Deploy

- create file `build-and-deploy.sh`.
- `chmod u+x build-and-deploy.sh`; ([chmod](https://ss64.com/osx/chmod.html), [Run a bash shell script](https://ss64.com/osx/syntax-shellscript.html))
- run script `./build-and-deploy.sh`

### CORS
[Enable CORS for an API Gateway REST API Resource](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)