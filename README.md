# kube-cron-slack

Kubernetes Slack Notification Cron Job POC

## DockerHub Image

<https://github.com/mpatters72/kube-cron-slack>

## Setup Secrets

### Copy Template

```bash
cp templates/kube-cron-slack-secret.yaml secrets/
```

### Get base64 encoded values

<https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually>

```bash
echo -n 'https://hooks.slack.com/services/UseYour/RealChannel/URIHERE' | base64
aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVXNlWW91ci9SZWFsQ2hhbm5lbC9VUklIRVJF
echo -n '#my-slack-channel' | base64
I215LXNsYWNrLWNoYW5uZWw=
```

### Replace base64 files in new file secrets/kube-cron-slack-secret.yaml

### Apply secret to kubernetes

```bash
kubectl apply -f secrets/kube-cron-slack-secret.yaml
```

### Verify

```bash
kubectl get secret kube-cron-slack -o yaml
```