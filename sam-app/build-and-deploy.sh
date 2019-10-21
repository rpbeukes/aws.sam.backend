#!/bin/bash
sam build && 
sam package --profile Ruan --region ap-southeast-2 --template-file template.yaml --output-template-file packaged.yaml --s3-bucket aws-workshop-ruan &&
aws cloudformation deploy --profile Ruan --region ap-southeast-2 --template-file packaged.yaml --stack-name AWSWorkshopRuan --capabilities CAPABILITY_IAM