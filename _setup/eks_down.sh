#######Delete Cluster#################
#awskubectl delete pods --all
#awskubectl delete service resume-service
#awskubectl delete service datascraper-service
#awskubectl delete service kubernetes

#eval $(python3 ../_py/ReadConfig.py)
#envsubst < ../_specs/aws_ekscluster.yaml | eksctl delete cluster -f -
######################################



###Delete Test  EC2 Instance##########
#delete ec2 
######################################



########Delete TackOns################
#aws loadbalancer delete -f ../_specs/aws_loadbalancer.yaml

echo "delete-file-system"
export FileSystemId=$(python3 ../_py/FindKey.py _config/aws_efsvolume_generated.yaml FileSystemId)
aws efs delete-file-system --file-system-id $FileSystemId
echo $FileSystemId
######################################



#####Delete CloudFormation Stack######
echo "aws cloudformation delete-stack ResumePPStack"
aws cloudformation delete-stack --stack-name ResumePPStack
######################################



