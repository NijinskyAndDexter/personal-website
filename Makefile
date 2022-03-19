#!/usr/bin/make -f

aws_region = us-east-1
activate_venv = . ./venv/39/bin/activate
code_deployment_bucket = serverless-deployment-bucket-rkelley
route_53_zone_name = rebecca-kelley.io
acm_certificate_arn = arn:aws:acm:us-east-1:370526056565:certificate/ad0ccb79-8139-4eaf-82fd-3a8c0c5834f1

ifeq (${environment},main)
	bucket_name=rebecca-kelley-personal-website
	subdomain=about
else ifeq (${environment},dev)
	bucket_name=rebecca-kelley-personal-website-dev
	subdomain=about-dev
endif

.PHONY: makevenv
makevenv: # initializes the venv if it does not already exist
makevenv: 
	python3 -m venv venv/39

.PHONY: pre-build
pre-build: # installs deployment requirements prior to build
pre-build: makevenv
	${activate_venv} && pip install -r requirements/deploy_requirements.txt

.PHONY: build
build: # uses sam build to build any dependencies before deployment
build: pre-build
	${activate_venv} && sam build -t ./cloudformation/sam.yaml


.PHONY: deploy
deploy: # deploys template to cloudformation
deploy: build
deploy: 
	${activate_venv} && sam deploy \
		--stack-name personal-website-${environment} \
		--capabilities CAPABILITY_IAM \
		--capabilities CAPABILITY_NAMED_IAM \
		--region ${aws_region} \
		--s3-bucket ${code_deployment_bucket} \
		--no-fail-on-empty-changeset \
		--no-confirm-changeset \
		--parameter-overrides \
				bucketName=${bucket_name} \
				subdomain=${subdomain} \
				route53ZoneName=${route_53_zone_name} \
				acmCertificateArn=${acm_certificate_arn}

