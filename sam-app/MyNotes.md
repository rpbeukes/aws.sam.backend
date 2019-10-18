### Commands

## Build:

`sam build`

## Package:

- create a bucket for the packaged code

`aws s3 mb s3://{YourBucketName}`

```javascript
aws s3 --profile Ruan --region ap-southeast-2 mb s3://aws-workshop-ruan
sam package --profile Ruan --region ap-southeast-2 --template-file template.yaml --output-template-file packaged.yaml --s3-bucket aws-workshop-ruan
```

After this command I got this from terminal:

```
Successfully packaged artifacts and wrote output template to file packaged.yaml.
Execute the following command to deploy the packaged template
aws cloudformation deploy --template-file /Users/ruanbeukes/repos/sas-frontend/backend/sam-app/packaged.yaml --stack-name <YOUR STACK NAME>
```
### Deploy:
`aws cloudformation deploy --profile Ruan --region ap-southeast-2 --template-file packaged.yaml --stack-name AWSWorkshopRuan --capabilities CAPABILITY_IAM`

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

Publish: 
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
