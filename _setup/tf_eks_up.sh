##############Read UserConfig#################
eval $(python3 ../_py/ReadConfig.py)
##############################################



##############docker build####################
#./docker_build.sh
#aws ecr get-login-password --region $region | docker login --username AWS --password-stdin $(aws_account_id).dkr.ecr.$(region).amazonaws.com
#docker tag $datascraper_image_id $(aws_account_id).dkr.ecr.$(region).amazonaws.com/rpp_datascraper-service
#docker push $(aws_account_id).dkr.ecr.$(region).amazonaws.com/rpp_datascraper-service
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

awskubectl apply -f ../_config/eks_efsstorageclass_temp.yaml
awskubectl apply -f ../_config/eks_efsclaim_temp.yaml
awskubectl apply -f ../_config/eks_efsvolume_temp.yaml
awskubectl apply -f ../_config/resume-service_temp.yaml
awskubectl apply -f ../_config/datascraper-service_temp.yaml

awskubectl expose deployment resume-deployment  --type=LoadBalancer  --name=resumeppbalancer-service
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

#kubectl set image deployment/datascraper-deployment image=$datascraper_image --record