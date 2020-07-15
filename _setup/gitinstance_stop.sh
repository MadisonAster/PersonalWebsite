cd ../_specs/terraform
eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
cd ../../_setup
aws ec2 --instance-id $ResumePPGitControlID stop
aws ec2 wait instance-stopped --instance-id $ResumePPGitControlID