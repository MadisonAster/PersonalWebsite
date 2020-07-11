
output "ResumePPFileSystem" {
  value       = aws_efs_file_system.ResumePPFileSystem.id
}

output "WebserverSecurityGroup" {
  value       = aws_security_group.WebserverSecurityGroup.id
}

output "DataScraperSecurityGroup" {
  value       = aws_security_group.DataScraperSecurityGroup.id
}

output "ResumePPVPC" {
  value       = module.vpc.vpc_id
}

//output "ResumePPCluster" {
//  value       = module.eks.cluster_id
//}
