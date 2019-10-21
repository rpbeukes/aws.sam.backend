#!/bin/bash
sam build && 
sam package --profile Ruan --region ap-southeast-2 --template-file template.yaml --output-template-file packaged.yaml --s3-bucket aws-workshop-ruan &&
sam deploy --profile Ruan --region ap-southeast-2 --template-file ./packaged.yaml --stack-name AWSWorkshopRuan --capabilities CAPABILITY_IAM &&
aws cloudformation --profile Ruan --region ap-southeast-2 describe-stacks --stack-name AWSWorkshopRuan --query 'Stacks[]'