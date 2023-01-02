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