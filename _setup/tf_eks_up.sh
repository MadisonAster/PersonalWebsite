##############Read UserConfig#################
eval $(python3 ../_py/ReadConfig.py)
##############################################

##############docker build####################
#./docker_build.sh
#aws ecr push ResumePPImage
##############################################

##################terraform###################
cd ../_specs/terraform
terraform init
terraform apply -auto-approve
cd ../../_setup
##############################################

exit 0

##########Create Services#####################
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