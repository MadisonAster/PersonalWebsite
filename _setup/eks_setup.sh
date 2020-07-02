##########TODO Pseudo Code#####
#export $ProjectDir=GetWorkingDirectory() #pseudocode
#cd $ProjectDir
#./docker_build.sh
#aws ecr push image1
#aws ecr push image2
#export newly created vars > ../_specs/userconfig.yaml

#envsubst ../_specs/resume-service.yaml < awskubectl apply -f -
#envsubst ../_specs/datascraper-service.yaml < awskubectl apply -f -
#envsubst Dockerfile < docker build -f -



#aws vpc create -f ../_specs/aws_vpc.yaml
#aws loadbalancer create -f ../_specs/aws_loadbalancer.yaml
#aws efs create -f ../_specs/aws_efsvolume.yaml

#aws ec2 create -f ../_specs/aws_ec2instance.yaml
#ssh -i $aws_key_path $aws_ec2instance_name

###############################

#declare $(python3 ../_py/ReadConfig.py)


eksctl create cluster -f ../_specs/aws_efscluster.yaml
awskubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=master"

awskubectl apply \
> -f ../_specs/eks_efsstorageclass.yaml \
> -f ../_specs/eks_efsclaim.yaml \
> -f ../_specs/eks_efsvolume.yaml \
> -f ../_specs/resume-service.yaml \
> -f ../_specs/datascraper-service.yaml \


#envsubst ../_specs/resume-service.yaml < cat -
#envsubst ../_specs/resume-service.yaml < cat -

#envsubst ../_specs/resume-service.yaml < awskubectl apply -f -
#envsubst ../_specs/datascraper-service.yaml < awskubectl apply -f -



awskubectl expose deployment resume-deployment  --type=LoadBalancer  --name=balancer-service

#awskubectl get all
#awskubectl describe all
#awskubectl describe pods
#awskubectl get pods
#awskubectl exec -it resume-deployment-5f5d8d6dbb-p4lh7 sh

#awskubectl get services --all-namespaces -o wide

