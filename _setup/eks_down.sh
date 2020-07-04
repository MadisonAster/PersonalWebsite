#delete security groups from efs
#delete security groups
#detached/deleted load balancer
#detached/deleted internet gateway
#deleted efs
#deleted subnets
#deleted vpc


echo "delete-file-system"
export FileSystemId=$(python3 ../_py/FindKey.py _config/aws_efsvolume_generated.yaml FileSystemId)
aws efs delete-file-system --file-system-id $FileSystemId
echo $FileSystemId

aws cloudformation delete-stack --stack-name ResumePPStack

exit 0


#echo "delete-subnet"
#export SubnetId1=$(python3 ../_py/FindKey.py _config/aws_subnet1_generated.yaml SubnetId)
#export SubnetId2=$(python3 ../_py/FindKey.py _config/aws_subnet2_generated.yaml SubnetId)
#export SubnetId3=$(python3 ../_py/FindKey.py _config/aws_subnet3_generated.yaml SubnetId)
#export SubnetId4=$(python3 ../_py/FindKey.py _config/aws_subnet4_generated.yaml SubnetId)
#aws ec2 delete-subnet --subnet-id $SubnetId1
#aws ec2 delete-subnet --subnet-id $SubnetId2
#aws ec2 delete-subnet --subnet-id $SubnetId3
#aws ec2 delete-subnet --subnet-id $SubnetId4
#echo $SubnetId1
#echo $SubnetId2
#echo $SubnetId3
#echo $SubnetId4

#echo "delete-security-group"
#export GroupId=$(python3 ../_py/FindKey.py _config/aws_securitygroup_generated.yaml GroupId)
#aws ec2 delete-security-group --group-id $GroupId
#echo $GroupId

#echo "delete-vpc"
#export VpcId=$(python3 ../_py/FindKey.py _config/aws_vpc_generated.yaml VpcId)
#aws ec2 delete-vpc --vpc-id $VpcId
#echo $VpcId

exit 0


awskubectl delete pods --all
awskubectl delete service resume-service
awskubectl delete service datascraper-service
awskubectl delete service kubernetes


eval $(python3 ../_py/ReadConfig.py)
envsubst < ../_specs/aws_ekscluster.yaml | eksctl delete cluster -f -


#aws vpc delete -f ../_specs/aws_vpc.yaml
#aws loadbalancer delete -f ../_specs/aws_loadbalancer.yaml
#aws efs delete -f ../_specs/aws_efsvolume.yaml