
##############terraform destroy###############
awskubectl delete service loadbalancer-service

cd ../_specs/terraform
terraform destroy -auto-approve
cd ../../_setup
##############################################