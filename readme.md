# package-modal-marwam

Un package React simple et réutilisable pour afficher un modal de confirmation ou d'annulation de tâche.

## 🚀 Installation

Installe le package via npm :

```sh
npm install package-modal-marwam
```
ou avec Yarn :
```sh
yarn add package-modal-marwam
```

## 📌 Utilisation

Importation du composant
```sh
import Modal from "package-modal-marwam/dist/index";
```
exemple d'utilisation
```sh
import { useState } from "react";
import Modal from "package-modal-marwam/dist/index";
const App = ()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir le modal
      </button>

      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          title="Confirmation"
          footerButtons={[
            { label: "Annuler", onClick: () => setIsOpen(false), className: "bg-gray-300" },
            { label: "Confirmer", onClick: () => alert("Action confirmée"), className: "bg-blue-500 text-white" },
          ]}
        >
          <p>Voulez-vous vraiment effectuer cette action ?</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
```


## 📜 Props disponibles
| Prop | Type | Description
|:-|:-|:-|
| closeModal | function	| Fonction pour fermer le modal
| title | string | Titre affiché dans l'en-tête du modal
| children | ReactNode | Contenu affiché à l’intérieur du modal
| footerButtons | array | Tableau d'objets { label, onClick, className } pour personnaliser les boutons exemple bouton de confirmation et d'annulation

## 🛠️ Développement
Si tu veux modifier et tester le package localement :

Clone le projet :
```sh
git clone https://github.com/ProjetMar/package-Modal-marwam.git
cd package-modal-marwam

````

Installe les dépendances :

```sh
npm install
```
Compile le package :

```sh
npm run build
```
