##############Read UserConfig#################
eval $(python3 ../_py/ReadConfig.py)
##############################################



##############docker build####################
#./datascraper_build.sh
#./myapache_build.sh
#./ecr_push.sh
##############################################



##############terraform apply##################
cd ../_specs/terraform
terraform init
terraform apply -auto-approve
eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
cd ../../_setup
##############################################



############kubectl apply#####################
aws eks update-kubeconfig --name ResumePPCluster

awskubectl apply -k "github.com/kubernetes-sigs/aws-efs-csi-driver/deploy/kubernetes/overlays/stable/?ref=master"

envsubst < ../_specs/eks_efsstorageclass.yaml > ../_config/eks_efsstorageclass_temp.yaml
envsubst < ../_specs/eks_efsclaim.yaml > ../_config/eks_efsclaim_temp.yaml
envsubst < ../_specs/eks_efsvolume.yaml > ../_config/eks_efsvolume_temp.yaml
envsubst < ../_specs/resume-service.yaml > ../_config/resume-service_temp.yaml
envsubst < ../_specs/datascraper-service.yaml > ../_config/datascraper-service_temp.yaml
envsubst < ../_specs/loadbalancer-service.yaml > ../_config/loadbalancer-service_temp.yaml

awskubectl apply -f ../_config/eks_efsstorageclass_temp.yaml
awskubectl apply -f ../_config/eks_efsclaim_temp.yaml
awskubectl apply -f ../_config/eks_efsvolume_temp.yaml
awskubectl apply -f ../_config/resume-service_temp.yaml
awskubectl apply -f ../_config/datascraper-service_temp.yaml
awskubectl apply -f ../_config/loadbalancer-service_temp.yaml

#awskubectl expose service resume-service  --type=LoadBalancer  --name=loadbalancer-service #For http only
###############################################



##########Print Commands#######################
awskubectl get all
#awskubectl get service -o wide
#awskubectl describe all
#awskubectl describe pods
#awskubectl get pods
#awskubectl get services --all-namespaces -o wide
###############################################

##############Shell Commands#######################
#awskubectl exec -it resume-deployment-############## sh
###############################################

##################Refresh Image################
#awskubectl set image deployment/datascraper-deployment image=$datascraper_image --record
###############################################

