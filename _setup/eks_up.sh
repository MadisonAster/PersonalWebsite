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
##############################################


##########Tacking things on###################
#TODO: All this should be in CloudFormation
echo "aws efs create-file-system"
envsubst < ../_specs/aws_efsvolume.yaml > ../_config/aws_efsvolume_temp.yaml
aws efs create-file-system --cli-input-yaml file://../_config/aws_efsvolume_temp.yaml --output yaml > ../_config/aws_efsvolume_generated.yaml
rm ../_config/aws_efsvolume_temp.yaml
export FileSystemId=$(python3 ../_py/FindKey.py _config/aws_efsvolume_generated.yaml FileSystemId)
echo $FileSystemId


#aws loadbalancer create -f ../_specs/aws_loadbalancer.yaml
###############################################



exit 0






echo "eksctl create cluster"
envsubst < ../_specs/aws_ekscluster.yaml > ../_config/aws_ekscluster_temp.yaml
eksctl create cluster -f ../_config/aws_ekscluster_temp.yaml
#awskubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=master"

#awskubectl apply \
#> -f ../_specs/eks_efsstorageclass.yaml \
#> -f ../_specs/eks_efsclaim.yaml \
#> -f ../_specs/eks_efsvolume.yaml \
#> -f ../_specs/resume-service.yaml \
#> -f ../_specs/datascraper-service.yaml \

#awskubectl expose deployment resume-deployment  --type=LoadBalancer  --name=balancer-service

#eksctl create cluster -f ../_config/aws_ekscluster_temp.yaml --output yaml >  ../_config/aws_ekscluster_generated.yaml
#rm ../_config/aws_ekscluster_temp.yaml
#cat ../_config/aws_ekscluster_generated.yaml


#export ClusterId=$(python3 ../_py/FindKey.py _config/aws_ekscluster_generated.yaml ClusterId)
#echo $ClusterId

#create ec2
#ec2 sh
#sudo apt-get install nfs-common
#sudo mkdir /mnt/w
#sudo mount -t efs $FileSystemId:/ /mnt/w
#cd /mnt/w
#git clone $ProjectForkURL .
#ls -a
#exit

exit 0

#aws eks update-kubeconfig --name ResumePP
#awskubectl get service -o wide

#eksctl create cluster -f ../_specs/aws_efscluster.yaml
#awskubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=master"

awskubectl apply \
> -f ../_specs/eks_efsstorageclass.yaml \
> -f ../_specs/eks_efsclaim.yaml \
> -f ../_specs/eks_efsvolume.yaml \
> -f ../_specs/resume-service.yaml \
> -f ../_specs/datascraper-service.yaml \


#envsubst ../_specs/resume-service.yaml < cat -
#envsubst ../_specs/datascraper-service.yaml < cat -

#envsubst ../_specs/resume-service.yaml < awskubectl apply -f -
#envsubst ../_specs/datascraper-service.yaml < awskubectl apply -f -



awskubectl expose deployment resume-deployment  --type=LoadBalancer  --name=balancer-service

#awskubectl get all
#awskubectl describe all
#awskubectl describe pods
#awskubectl get pods
#awskubectl exec -it resume-deployment-5f5d8d6dbb-p4lh7 sh

#awskubectl get services --all-namespaces -o wide
