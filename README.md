# Notes App — Fullstack + DevOps Demo

**One-line:** A simple Notes CRUD app (Node.js + MongoDB) containerized with Docker, deployed to Kubernetes (Minikube manifests included), with CI/CD & monitoring notes.

---

## 🚀 Project Overview

This repository demonstrates a full developer → platform flow:

- **Backend:** Node.js (Express) — `notes-app/`
- **Database:** MongoDB (Docker)
- **Containerization:** Dockerfile (multi-stage)
- **Local orchestration:** docker-compose for quick dev
- **Kubernetes:** `k8s/` manifests (Deployment, Service, ConfigMap)
- **DevOps:** Health probes, HPA (Horizontal Pod Autoscaler) (Minikube-ready)
- **Monitoring:** Prometheus + Grafana (example configs)
- **CI/CD (recommended):** Jenkinsfile / GitHub Actions examples (see `.github/`)

---

## 🗂 Repo Structure

```
notes-app-devops/
├── notes-app/              # Node.js backend
│   ├── package.json
│   ├── src/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── .dockerignore
│   └── package-lock.json
├── k8s/                    # Kubernetes manifests
│   ├── backend.yaml        # Deployment + Service (ClusterIP)
│   ├── mongo.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
├── .gitignore
└── README.md
```

---

## 🛠 How to run locally (development)

### 1) Using docker-compose (fast)

```bash
# Start mongo + app (from project root)
docker compose -f notes-app/docker-compose.yml up --build
```

# Open http://localhost:3000/notes

### 2) Using Kubernetes (Minikube)

```bash
# Ensure minikube is running
minikube start

# Build image inside minikube
eval $(minikube docker-env)
docker build -t notes-backend:latest ./notes-app

# Apply manifests
kubectl apply -f k8s/

# Expose via minikube service
minikube service backend -n notes-app
```

✅ Key Features & Why They Matter

* Multi-stage Dockerfile — small, secure images
* Health checks — liveness & readiness probes for stability
* ConfigMap usage — environment configs managed free of rebuilds
* HPA — demonstrates autoscaling behavior under load

*Monitoring and CI/CD examples are not included in this repo structure. Add your own Prometheus/Grafana configs and CI/CD workflows as needed.*

📁 K8s Manifests (what to check):

* `k8s/backend.yaml`: includes livenessProbe and readinessProbe and resources.requests so HPA can function.
* `k8s/mongo.yaml`: uses ClusterIP and a PersistentVolume or emptyDir for dev.
* `k8s/ingress.yaml`: example ingress rules (minikube may require tunnel)