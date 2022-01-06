# BottleNovole

Projet de Docker de Rémi Matrod et Martin Folliet, réalisé pour le cours **INFO910 - DevOps**.


## Fonctionnement
Ce projet utilise deux conteneurs Docker :
- Un conteneur MySQL (v8.0.27)
- Un conteneur NodeJS-Alpine (v16.13), généré depuis le Dockerfile du dossier `Serveur` de ce répertoire Git.
  L'image docker peut également être récupérée depuis Docker Hub : [https://hub.docker.com/repository/docker/follietm/bottlenovole_blagafac](https://hub.docker.com/repository/docker/follietm/bottlenovole_blagafac).

Ce projet peut être lancé avec docker-compose, ou avec Kubernetes (Nous utilisons Minikube + kubectl).

## Variables d'environnement (utilisé pour docker-compose)
Un fichier `.env.copy` est donné dans le répertoire Git. Il ne contient que les variables d'envronnement, pas les valeurs associées.  
Il faut suivre ces étapes pour paramétrer les variables d'environnement (utilisées dans `docker-compose`) :
1. Copier le fichier `.env.copy` dans le fichier `.env`
2. Remplir les valeurs des variables d'environnement dans le fichier `.env`

Une fois le fichier `.env` rempli, les conteneurs peuvent être montés dans docker-compose.  
Note : Ce fichier n'est pas utilisé lors de la config k8s, car les informations sont données directement dans les fichiers de configuration de k8s.

## Lancement des conteneurs (Docker-Compose)
Lancer la commande `docker-compose up -d --build`.  
Le site est alors accessible sur le port 3000, et la base de données MySQL est disponible sur le port 3306.

Note : Le docker-compose recompile le conteneur `blagafac` localement, et récupère l'image `mysql` depuis Docker Hub. Une connexion internet est requise pour construire `blagafac` et récupérer le conteneur `mysql` lors du premier build.  

## Lancement des conteneurs (Minikube/Kubectl)
Lancer la commande `kubectl apply -f k8s/`, puis démarrer le service avec `minikube service bottlenovoleblagafac-service`.  
Le site est alors accessible.

Note : Les services `bottlenovoleblagafac` et `mysql` sont chargés depuis Docker Hub. Une connexion internet est donc requise lors de l'application des configurations k8s.

## Auteurs
Rémi Matrod  
Martin Folliet