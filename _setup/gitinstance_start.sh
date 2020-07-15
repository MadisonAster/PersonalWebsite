cd ../_specs/terraform
eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
cd ../../_setup
aws ec2 --instance-id $ResumePPGitControlID start
aws ec2 wait instance-running --instance-id $ResumePPGitControlID
ssh -i $private_key_path $ResumePPGitControlDNS
sudo mount -t efs $ResumePPFileSystemDNS:/ /mnt/w