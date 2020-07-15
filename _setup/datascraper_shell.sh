cd ../_specs/terraform
eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
cd ../../_setup
export podname=$(awskubectl get pods --pod-name datascraper-deployment --get-pod-name)
awskubectl exec -it $podname sh

