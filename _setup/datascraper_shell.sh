eval $(terraform output | sed 's/^/export /; s/ = /="/g; s/$/"/')
export podname=$(awskubectl get pods --pod-name datascraper-deployment --get-pod-name)
awskubectl exec -it $podname sh

