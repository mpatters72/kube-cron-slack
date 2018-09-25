# kube-cron-slack

Kubernetes Slack Notification Cron Job POC

## DockerHub Image

<https://hub.docker.com/r/mpatters72/kube-cron-slack/>

## Create a Slack Webhook URI

<https://my.slack.com/services/new/incoming-webhook>

## Setup Secrets

### Copy Template

```bash
cp templates/kube-cron-slack-secret.yaml /tmp/
```

### Get base64 encoded values

<https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually>

* Use the webhook URI you generated here and your desired slack channel

```bash
echo -n 'https://hooks.slack.com/services/UseYour/RealChannel/URIHERE' | base64
aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVXNlWW91ci9SZWFsQ2hhbm5lbC9VUklIRVJF
echo -n '#my-slack-channel' | base64
I215LXNsYWNrLWNoYW5uZWw=
```

### Replace base64 files in new file tmp/kube-cron-slack-secret.yaml

### Add secret to kubernetes

```bash
kubectl apply -f /tmp/kube-cron-slack-secret.yaml
```

Verify

```bash
kubectl get secret kube-cron-slack -o yaml
```

## Setup CronJob

### Double-check settings in templates/kube-cron-slack-cronjob

* e.g. do you really want this running every 2 minutes?

* See: <https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/>

* Also note we are exposing secret and pod info to pod: 
* See: <https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/>

### Copy template and make any desired edits and apply it

```bash
cp templates/kube-cron-slack-cronjob.yaml /tmp
# make any edits to /tmp/kube-cron-slack-cronjob.yaml
# apply it
kubectl apply -f /tmp/kube-cron-slack-cronjob.yaml
```

### Troubleshooting

```bash
kubectl get cronjob
kubectl get jobs --watch
```