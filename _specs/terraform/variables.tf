variable "aws_region" {
  description = "Name of Aws Region"
  type        = string
  default     = "us-west-2"
}

variable "cluster_name" {
  description = "Name of EKS Cluster"
  type        = string
  default     = "ResumePPCluster"
}

variable "vpc_name" {
  description = "Name of VPC"
  type        = string
  default     = "ResumePPVPC"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "192.168.0.0/16"
}

variable "vpc_azs" {
  description = "Availability zones for VPC"
  type        = list
  default     = ["us-west-2a", "us-west-2b", "us-west-2c", "us-west-2d"]
}

variable "vpc_enable_nat_gateway" {
  description = "Enable NAT gateway for VPC"
  type    = bool
  default = true
}

variable "enable_dns_support" {
  description = ""
  type    = bool
  default = true
}

variable "enable_dns_hostnames" {
  description = ""
  type    = bool
  default = true
}

variable "single_nat_gateway" {
  description = ""
  type    = bool
  default = true
}

variable "vpc_private_subnets" {
  description = "Private subnets for VPC"
  type        = list(string)
  default     = ["192.168.0.0/18", "192.168.64.0/18"]
}

variable "vpc_public_subnets" {
  description = "Public subnets for VPC"
  type        = list(string)
  default     = ["192.168.128.0/18", "192.168.192.0/18"]
}

variable "ec2_instance_ami" {
  description = "AMI number"
  type        = string
  default     = "ami-003634241a8fcdec0"
}

variable "aws_key_pair_name" {
  description = "Key Pair Name"
  type        = string
  default     = "MasterKey1"
}

variable "public_key_path" {
  description = "Key Path"
  type        = string
  default     = "/usr/local/keys/MasterKey1.pub"
}

