provider "aws" {
  version = ">= 2.28.1"
  region  = var.aws_region
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.21.0"

  name                 = var.vpc_name
  cidr                 = var.vpc_cidr
  enable_dns_support   = var.enable_dns_support
  enable_dns_hostnames = var.enable_dns_hostnames

  azs                  = var.vpc_azs
  private_subnets      = var.vpc_private_subnets
  public_subnets       = var.vpc_public_subnets
  single_nat_gateway   = true
}

resource "aws_security_group" "WebserverSecurityGroup" {
  name_prefix = "WebserverSG"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "ec2_instances" {
  source                 = "terraform-aws-modules/ec2-instance/aws"
  version                = "~> 2.0"

  name                   = "MyTestInstance"
  instance_count         = 1

  ami                    = var.ec2_instance_ami
  instance_type          = "t2.micro"
  key_name               = var.aws_key_pair_name
  subnet_id = module.vpc.public_subnets[0]
  vpc_security_group_ids = [
    aws_security_group.WebserverSecurityGroup.id,
  ]

  tags = {
    Terraform = "true"
    Environment = "dev"
  }
}

