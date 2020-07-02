declare $(python3 ../_py/ReadConfig.py)

envsubst ../_specs/aws_efscluster.yaml < cat -
#envsubst ../_specs/aws_efscluster.yaml < eksctl delete cluster -f -


#eksctl delete cluster -f ../_specs/aws_efscluster.yaml




#aws vpc delete -f ../_specs/aws_vpc.yaml
#aws loadbalancer delete -f ../_specs/aws_loadbalancer.yaml
#aws efs delete -f ../_specs/aws_efsvolume.yaml