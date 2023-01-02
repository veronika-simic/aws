AWS is a cloud platform
# this course is part of udemy and will use
IAM
DynamoDB - data base service
S3 - object storage service 
RDS - relational data base services
EC2 - elastic compute cloud
NodeJS 
Lambda - run code without servers
SES - send emails to customers

# requirements
- VS code
- Node
- Postman

## Section 2: AWS & IAM V2
- AWS is a cloud platform used to lower costs. What this is means is that the operating system and hardware products co-exist remotely and at scale.
- AWS regions are isolated from each other, they have availability zones which are also isolated from each other. 
- IAM - identity and access managment 
      - it can be accessed with Managment Console, Command Line tools, SDKS, HTTPS API
- Root user can create IAM user accounts and allow different accounts different access. 
- IAM users can not access anything until we give them policies (JSON)
- To create IAM user first sign in as Root user, then go to IAM (Users -> add User)
- To log through the Managment Console select AWS credential type should be Password - AWS Management Console access
- IAM User Group - Add user that have similar persmissions

Install SDK v2 with npm i aws-sdk
- add, list, update users

Create custom policy
List policies
Add policy to user
Detach policy

User group
- collection of users
- allows for easier managment of policies for all those users
- create groups from script
- attach policies to groups
- attach user to groups
- dettach policies from groups

When we create a new user from JS script we do not have access key for that user and we can not login with that users credentials


## Section 3: AWS & IAM V3
- in V3 we can import each service we need induvidually, there is no need to import whole aws

## Section 4: AWS CloudShell
- it is a browser based shell that allows us to run aws scripts
- aws iam create-user --user-name user1
- before uploading a file to CLI delete existing terminal
- aws iam attach-user-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --user-name user1
- aws iam create-access-key --user-name user1
-  aws iam create-group --group-name Admins
- aws iam add-user-to-group --user-name user1 --group-name Admins

## Section 5: DynamoDB
- NoSQL (key value pairs instead of rows and columns)
- flexible, scalable, high-performance, high-functionality
- stores data in tables
- items are similar to rows 
- items have attributes (id, publication_date, body...)
- primary key (partition key and sort key)
- partition keys can be same but then sort keys must be different
