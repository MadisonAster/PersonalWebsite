
output "ResumePPFileSystem" {
  value = aws_efs_file_system.ResumePPFileSystem.id
}

output "ResumePPFileSystemDNS" {
  value = aws_efs_mount_target.ResumePPMountTargets[0].dns_name
}

//output "ResumePPGitControlID" {
//  value = module.ec2_instances.ResumePPGitInstance.id
//}

//output "ResumePPGitControlDNS" {
//  value = module.ec2_instances.ResumePPGitInstance.dns
//}

output "WebserverSecurityGroup" {
  value = aws_security_group.WebserverSecurityGroup.id
}

output "DataScraperSecurityGroup" {
  value = aws_security_group.DataScraperSecurityGroup.id
}

output "ResumePPVPC" {
  value = module.vpc.vpc_id
}

output "DefaultSecurityGroup" {
  value = module.vpc.default_security_group_id
}

output "aws_account_id" {
  value = var.aws_account_id
}

output "aws_user_id" {
  value = var.aws_user_id
}

output "aws_region" {
  value = var.aws_region
}

output "private_key_path" {
  value = var.private_key_path
}


//output "ResumePPCluster" {
//  value       = module.eks.cluster_id
//}
