
# Documentation pour cloner et lancer le projet evoSoftInventory

![Capture d’écran de la page d'accueil](Capture%20d’écran%202025-02-08%20135331.png)
## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Git](https://git-scm.com/) : Outil pour cloner et gérer des dépôts Git.
- [Node.js](https://nodejs.org/) : Environnement d'exécution JavaScript.
- [npm](https://www.npmjs.com/) : Gestionnaire de paquets pour Node.js.

## Étapes pour cloner et lancer le projet

### 1. Cloner le dépôt

Ouvrez votre terminal ou ligne de commande et exécutez la commande suivante pour cloner le dépôt :

```bash
git clone https://github.com/tereur/evoSoftInventory.git
```

### 2. Accéder au répertoire du projet

Une fois le dépôt cloné, accédez au répertoire du projet :

```bash
cd evoSoftInventory
```

### 3. Installer les dépendances

Installez les dépendances du projet avec npm. Cela va télécharger et installer toutes les bibliothèques nécessaires à l'exécution du projet.

```bash
npm install
```

### 4. Lancer le projet

Une fois les dépendances installées, vous pouvez démarrer le projet en exécutant la commande suivante :

```bash
npm run dev
```

Cela démarrera l'application, et vous pourrez y accéder via votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173) (ou le port spécifié dans la configuration).

### 5. Vérification de l'exécution

Après avoir lancé le projet, vous devriez voir un message dans votre terminal indiquant que l'application a démarré avec succès. Vous pouvez maintenant ouvrir votre navigateur et accéder à l'application à l'adresse suivante :

```
http://localhost:5173
```


