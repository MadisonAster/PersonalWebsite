
##############terraform destroy###############
awskubectl delete service resumeppbalancer-service

cd ../_specs/terraform
terraform destroy -auto-approve
cd ../../_setup
##############################################