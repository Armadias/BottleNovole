# BottleNovole

Projet de Docker de Rémi Matrod et Martin Folliet, réalisé pour le cours **INFO910 - DevOps**.


## Fonctionnement
Ce projet utilise deux conteneurs Docker :
- Un conteneur MySQL (v8.0.27)
- Un conteneur NodeJS-Alpine (v16.13), généré depuis le Dockerfile du dossier `Serveur` de ce répertoire Git.


## Environnement
Un fichier `.env.copy` est donné dans le répertoire Git. Il ne contient que les variables d'envronnement, pas les valeurs associées.  
Il faut suivre ces étapes pour paramétrer les variables d'environnement (utilisées dans `docker-compose`) :
1. Copier le fichier `.env.copy` dans le fichier `.env`
2. Remplir les valeurs des variables d'environnement dans le fichier `.env`

Une fois le fichier `.env` rempli, les conteneurs peuvent être montés.


## Lancement des conteneurs (Docker-Compose)
Lancer la commande `docker-compose up -d`.  
Le site est alors accessible sur le port 3000, et la base de données MySQL est disponible sur le port 3306.

## Lancement des conteneurs (Minikube/Kubectl)
Lancer la commande `kubectl apply -f k8s/`, puis démarrer le service avec `minikube service bottlenovoleblagafac-service`.  
Le site est alors accessible.

## Auteurs
Rémi Matrod  
Martin Folliet