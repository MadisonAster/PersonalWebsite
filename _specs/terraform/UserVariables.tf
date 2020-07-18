variable "aws_account_id" {
  description = "<YOUR ACCOUNT #>"
  type        = string
  default     = "USER ACCOUNT NUMBER"
}

variable "aws_user_id" {
  description = "<YOUR USER #>"
  type        = string
  default     = "USER USER NUMBER"
}

variable "aws_region" {
  description = "Name of Aws Region"
  type        = string
  default     = "us-west-2"
}

variable "region" {
  description = "Name of Aws Region"
  type        = string
  default     = "us-west-2"
}


variable "map_accounts" {
  description = "Additional AWS account numbers to add to the aws-auth configmap."
  type        = list(string)

  default = [
    "777777777777",
  ]
}

variable "map_roles" {
  description = "Additional IAM roles to add to the aws-auth configmap."
  type = list(object({
    rolearn  = string
    username = string
    groups   = list(string)
  }))

  default = [
    {
      rolearn  = "arn:aws:iam::66666666666:role/role1"
      username = "role1"
      groups   = ["system:masters"]
    },
  ]
}

variable "map_users" {
  description = "Additional IAM users to add to the aws-auth configmap."
  type = list(object({
    userarn  = string
    username = string
    groups   = list(string)
  }))

  default = [
    {
      userarn  = "arn:aws:iam::66666666666:user/user1"
      username = "user1"
      groups   = ["system:masters"]
    },
    {
      userarn  = "arn:aws:iam::66666666666:user/user2"
      username = "user2"
      groups   = ["system:masters"]
    },
  ]
}