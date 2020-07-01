# Setup

## . Prerequisites
        * envsubst
        * Python3
        * Docker
        * Docker Compose (For local testing)
        * AWS user account
        * AWS command line tools
        * AWS kubectl installation
        * AWS configure
        * WSL2 (If on Windows)
        * Firefox account(For bookmarks features)

## . Firefox Setup
**.    SECURITY WARNING! I don't recommend using this feature if you synchronize passwords or other sensitive data in your mozilla account! Your credentials will be available to anyone who manages to break into the docker container. Mozilla does not provide a way to prevent this. You have been warned!**

    Manually disable Mozilla Account Extension, tabs, and password sync

> python3 _config/firefoxprofile/get_profile.py

## . Docker Compose Setup

### .. Running Locally
> docker-compose _specs/docker-compose.yaml

    Navigate to: http://localhost:8080

## . EKS Setup

### .. Current Process
    On AWS manually create VPC, KeyPair, SecurityGroup, EC2Instance, EFSVolume, LoadBalancer, Route53
            
    Fill in _config/userconfig.yaml manually including generated section
    
> _setup/eks_setup.sh

### .. Future Process
> _setup/eks_setup.sh

    Fill in _config/userconfig.yaml manually as desired excluding generated section

## . EKS Teardown

#### .. Current Process
> _setup/eks_teardown.sh

    On AWS manually delete VPC, KeyPair, SecurityGroup, EC2Instance, EFSVolume, LoadBalancer, Route53

#### .. Future Process

> _setup/eks_teardown.sh




