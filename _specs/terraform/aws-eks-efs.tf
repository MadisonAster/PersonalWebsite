terraform {
  required_version = ">= 0.12.0"
}

provider "aws" {
  version = ">= 2.28.1"
  region  = var.region
}

provider "random" {
  version = "~> 2.1"
}

provider "local" {
  version = "~> 1.2"
}

provider "null" {
  version = "~> 2.1"
}

provider "template" {
  version = "~> 2.1"
}

data "aws_eks_cluster" "cluster" {
  name = module.eks.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.eks.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
  load_config_file       = false
  //version                = "~> 1.16"
  version                = "~> 1.11" //I don't understand where this version number comes from
}

data "aws_availability_zones" "available" {
}

resource "random_string" "suffix" {
  length  = 8
  special = false
}





resource "aws_security_group" "ControlPlaneSecurityGroup" {
  name_prefix   = "ControlPlaneSG"
  vpc_id        = module.vpc.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["192.168.0.0/16"]
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "WebserverSecurityGroup" {
  name_prefix   = "WebserverSG"
  vpc_id        = module.vpc.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "DataScraperSecurityGroup" {
  name_prefix   = "DataScraperSG"
  vpc_id        = module.vpc.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 2049
    to_port     = 2049
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 2049
    to_port     = 2049
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_efs_file_system" "ResumePPFileSystem" {
  creation_token = "ResumePPFileSystem"
  performance_mode = "generalPurpose"
  throughput_mode = "bursting"
  encrypted = "true"
  tags = {
    Name = "ResumePPFileSystem"
    Terraform = "true"
    Environment = "test"
  }
}

resource "aws_efs_mount_target" "ResumePPMountTargets" {
  count = length(module.vpc.public_subnets)

  file_system_id  = aws_efs_file_system.ResumePPFileSystem.id
  subnet_id = element(module.vpc.public_subnets, count.index)
  security_groups = [
    module.vpc.default_security_group_id,
    aws_security_group.ControlPlaneSecurityGroup.id,
    aws_security_group.WebserverSecurityGroup.id,
    aws_security_group.DataScraperSecurityGroup.id,
  ]
}









module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  //version = "2.44.0" //last tested version

  name                 = var.vpc_name
  cidr                 = var.vpc_cidr
  azs                  = var.vpc_azs
  private_subnets      = var.vpc_private_subnets
  public_subnets       = var.vpc_public_subnets
  //private_subnets      = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  //public_subnets       = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"] 
  enable_nat_gateway   = var.vpc_enable_nat_gateway
  enable_dns_support   = var.enable_dns_support
  enable_dns_hostnames = var.enable_dns_hostnames
  single_nat_gateway   = var.single_nat_gateway
  
  tags = {
    "kubernetes.io/cluster/${var.cluster_name}"   = "shared"
  }
  public_subnet_tags = {
    "kubernetes.io/cluster/${var.cluster_name}"   = "shared"
    "kubernetes.io/role/elb"                      = "1"
  }
  private_subnet_tags = {
    "kubernetes.io/cluster/${var.cluster_name}"   = "shared"
    "kubernetes.io/role/internal-elb"             = "1"
  }
}







/*
resource "aws_key_pair" "mykeypair" {
  key_name   = var.aws_key_pair_name
  public_key = file(var.public_key_path)
}
*/

module "ec2_instances" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  //version = "2.15.0" //last tested version

  name = "ResumePPGitInstance"
  instance_count = 1
  ami = var.ec2_instance_ami
  instance_type = var.ec2_instance_type
  key_name = var.aws_key_pair_name
  subnet_id = module.vpc.public_subnets[0]
  vpc_security_group_ids = [
    aws_security_group.ControlPlaneSecurityGroup.id,
    aws_security_group.WebserverSecurityGroup.id,
    aws_security_group.DataScraperSecurityGroup.id,
  ]

  tags = {
    Terraform = "true"
    Environment = "dev"
  }
  user_data = <<-EOF
              #! /bin/bash
              sudo apt-get update
              sudo apt-get -y install nfs-common
              sudo apt-get -y install make
              sudo apt-get -y install binutils
              sudo git clone https://github.com/aws/efs-utils
              cd ./efs-utils
              sudo ./build-deb.sh
              sudo apt-get -y install ./build/amazon-efs-utils*deb

              sudo mkdir /mnt/w
              sudo mount -t efs ${aws_efs_mount_target.ResumePPMountTargets[0].dns_name}:/ /mnt/w
              sudo chmod 777 /mnt/w
              sudo git clone ${var.project_fork} /mnt/w
              sudo shutdown -h now
  EOF
}








module "eks" {
  source       = "terraform-aws-modules/eks/aws"
  //version                            = "12.1.0" //last tested version
  //cluster_version                    = "1.16"
  cluster_name                         = var.cluster_name
  vpc_id                               = module.vpc.vpc_id
  subnets                              = module.vpc.private_subnets
  cluster_security_group_id            = aws_security_group.ControlPlaneSecurityGroup.id
  //manage_aws_auth = false
  map_roles                            = var.map_roles
  map_users                            = var.map_users
  map_accounts                         = var.map_accounts
  tags = {
    Name = var.cluster_name
  }
  
  node_groups = {
    WebserverGroup = {
      instance_type                 = var.webserver_instance_type
      //additional_userdata           = ""
      asg_desired_capacity          = 1
      asg_max_size                  = 1
      additional_security_group_ids = [
        module.vpc.default_security_group_id,
        aws_security_group.ControlPlaneSecurityGroup.id,
        aws_security_group.WebserverSecurityGroup.id
      ]
      ssh = {
        allow = true
        publicKeyPath = var.public_key_path
        sourceSecurityGroupIds = [
          module.vpc.default_security_group_id,
          aws_security_group.ControlPlaneSecurityGroup.id,
          aws_security_group.WebserverSecurityGroup.id
        ]
      }
      labels = {
        app = "webserver"
      }
      tags = {
        app = "webserver"
      }
    }

    DataScraperGroup = {
      instance_type                 = var.datascraper_instance_type
      //additional_userdata           = ""
      additional_security_group_ids = [
        module.vpc.default_security_group_id,
        aws_security_group.ControlPlaneSecurityGroup.id,
        aws_security_group.DataScraperSecurityGroup.id
      ]
      asg_max_size                  = 1
      asg_desired_capacity          = 1
      ssh = {
        allow = true
        publicKeyPath = var.public_key_path
        sourceSecurityGroupIds = [
          module.vpc.default_security_group_id,
          aws_security_group.ControlPlaneSecurityGroup.id,
          aws_security_group.DataScraperSecurityGroup.id
        ]
      }
      labels = {
        app = "datascraper"
      }
      tags = {
        app = "datascraper"
      }
    }
  }
}



//TODO:
//  * shore up the ports
//  * redirect dns

