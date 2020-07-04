##############Read UserConfig#################
eval $(python3 ../_py/ReadConfig.py)
##############################################



##############docker build####################
#./docker_build.sh
#aws ecr push ResumePPImage
##############################################



##############CloudFormation##################
echo "aws cloudformation create-stack ResumePPStack"
envsubst < ../_specs/aws_ekscloudformation.yaml > ../_config/aws_ekscloudformation_temp.yaml
#aws cloudformation create-stack --stack-name ResumePPStack --template-url $CloudFormationTemplateURL
aws cloudformation create-stack --stack-name ResumePPStack --template-body file://../_config/aws_ekscloudformation_temp.yaml
aws cloudformation wait stack-create-complete --stack-name ResumePPStack
aws cloudformation describe-stack-resources --stack-name ResumePPStack --output yaml > ../_config/aws_ekscloudformation_generated.yaml
eval $(python3 ../_py/ReadCloudFormation.py _config/aws_ekscloudformation_generated.yaml)
echo $ControlPlaneSecurityGroup
echo $PrivateSubnet01
echo $PrivateSubnet02
echo $PublicSubnet01
echo $PublicSubnet02

aws ec2 describe-security-groups --filters Name=vpc-id,Values=$VPC --filters Name=group-name,Values=default > ../_config/aws_securitygroup_generated.yaml
export VPCSecurityGroupId=$(python3 ../_py/FindKey.py _config/aws_securitygroup_generated.yaml GroupId)
##############################################



##########Create TackOns###################
#TODO: All this should be in CloudFormation
echo "aws efs create-file-system"
envsubst < ../_specs/aws_efsvolume.yaml > ../_config/aws_efsvolume_temp.yaml
aws efs create-file-system --cli-input-yaml file://../_config/aws_efsvolume_temp.yaml --output yaml > ../_config/aws_efsvolume_generated.yaml
rm ../_config/aws_efsvolume_temp.yaml
export FileSystemId=$(python3 ../_py/FindKey.py _config/aws_efsvolume_generated.yaml FileSystemId)
echo $FileSystemId

#aws loadbalancer create -f ../_specs/aws_loadbalancer.yaml
#############################################



##############Clone Git Repo#################
#TODO: Can we do this with CodeDeploy Instead?
echo "aws ec2 create-instance"

#aws ec2 run-instances --cli-input-yaml file://../_config/aws_ec2instance_temp.yaml --output yaml 
#aws ec2 run-instances --image-id $TestInstanceType --count 1 --instance-type t2.nano --key-name $MyKeyPair --security-group-ids $ControlPlaneSecurityGroup --subnet-id $PublicSubnet02
#aws ec2 describe-instance --stack-name ResumePPStack --output yaml > ../_config/aws_ec2instance_generated.yaml

envsubst < ../_specs/aws_ec2instance.yaml > ../_config/aws_ec2instance_temp.yaml
aws ec2 run-instances --cli-input-yaml file://../_config/aws_ec2instance_temp.yaml --output yaml > ../_config/aws_ec2instance_generated.yaml
export InstanceId=$(python3 ../_py/FindKey.py _config/aws_ec2instance_generated.yaml InstanceId)
aws ec2 wait instance-running --instance-id $InstanceId

echo $InstanceId
echo "describe-instances"
aws ec2 describe-instances --instance-id $InstanceId --output yaml > ../_config/aws_ec2instance_generated.yaml
export InstanceId=$(python3 ../_py/FindKey.py _config/aws_ec2instance_generated.yaml InstanceId)
export PublicDnsName=$(python3 ../_py/FindKey.py _config/aws_ec2instance_generated.yaml PublicDnsName)
echo $InstanceId
echo $PublicDnsName
echo $aws_privatekey_path

echo ssh -i $aws_privatekey_path ubuntu@$PublicDnsName
ssh -i $aws_privatekey_path ubuntu@$PublicDnsName


sudo apt-get install nfs-common
sudo mkdir /mnt/w
sudo mount -t efs $FileSystemId:/ /mnt/w
cd /mnt/w
git clone $ProjectForkURL .
ls -a
exit


#aws ec2 terminate-instances --instance-ids $InstanceId
##############################################


exit 0

##########Create Cluster######################
echo "eksctl create cluster"
envsubst < ../_specs/aws_ekscluster.yaml > ../_config/aws_ekscluster_temp.yaml
eksctl create cluster -f ../_config/aws_ekscluster_temp.yaml
#eksctl describe-cluster > ../_config/aws_ekscluster_generated.yaml
awskubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=master"

envsubst < ../_specs/eks_efsstorageclass.yaml > ../_config/eks_efsstorageclass_temp.yaml
envsubst < ../_specs/eks_efsclaim.yaml > ../_config/eks_efsclaim_temp.yaml
envsubst < ../_specs/eks_efsvolume.yaml > ../_config/eks_efsvolume_temp.yaml
envsubst < ../_specs/resume-service.yaml > ../_config/resume-service_temp.yaml
envsubst < ../_specs/datascraper-service.yaml > ../_config/datascraper-service_temp.yaml

awskubectl apply \
> -f ../_config/eks_efsstorageclass_temp.yaml \
> -f ../_config/eks_efsclaim_temp.yaml \
> -f ../_config/eks_efsvolume_temp.yaml \
> -f ../_config/resume-service_temp.yaml \
> -f ../_config/datascraper-service_temp.yaml \

awskubectl expose deployment resume-deployment  --type=LoadBalancer  --name=balancer-service
###############################################

exit 0

##############Shell Commands#######################
#awskubectl exec -it resume-deployment-############## sh
###############################################



##########Print Commands#######################
awskubectl get service -o wide
#awskubectl get all
#awskubectl describe all
#awskubectl describe pods
#awskubectl get pods
#awskubectl get services --all-namespaces -o wide
###############################################