# Resume++ Setup

## Prerequisites
- [ ] envsubst
- [ ] Python3
- [ ] Docker
- [ ] Docker Compose (For local testing)
- [ ] AWS user account
- [ ] AWS command line tools
- [ ] AWS kubectl installation
- [ ] AWS configure
- [ ] WSL2 (If on Windows)
- [ ] Firefox account(For bookmarks features)

## Firefox Setup

**SECURITY WARNING! I don't recommend using this feature if you synchronize passwords or other sensitive data in your mozilla account! Your credentials will be available to anyone who manages to break into the docker container. Mozilla does not provide a way to prevent this. Firefox would need to be modified to create a separate credential for giving access to only bookmarks data to avoid this issue. YOU HAVE BEEN WARNED!**

    Manually disable Mozilla Account Extension, tabs, and password sync

> python3 _config/firefoxprofile/get_profile.py

## Docker Compose Setup

####	Running Locally
> cd _setup

> ./docker_build.sh

> ./docker-compose_up.sh

    Navigate browser to: [http://localhost:8080](http://localhost:8080)
    
> ./docker-compose_down.sh

## AWS Elastic Kubernetes Service Setup

####	Current Process
    On AWS manually create VPC, KeyPair, SecurityGroup, EC2Instance, EFSVolume, LoadBalancer, Route53
            
    Fill in _config/userconfig.yaml manually including generated section
    
> _setup/eks_setup.sh

####	Future Process
> _setup/eks_setup.sh

    Fill in _config/userconfig.yaml manually as desired excluding generated section

## AWS Elastic Kubernetes Service Teardown

####	Current Process
> _setup/eks_teardown.sh

    On AWS manually delete VPC, KeyPair, SecurityGroup, EC2Instance, EFSVolume, LoadBalancer, Route53

####	Future Process
> _setup/eks_teardown.sh




