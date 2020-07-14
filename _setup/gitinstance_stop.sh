eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
aws ec2 --instance-id $ResumePPGitControlID stop
aws ec2 wait instance-stopped --instance-id $ResumePPGitControlID