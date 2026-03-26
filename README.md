# Gutenberg Advanced Blocks

Suite de blocs Gutenberg avancés et réutilisables avec options de personnalisation visuelles dans l'éditeur.

## Blocs disponibles

| Bloc | Description |
|---|---|
| **GAB Hero** | Bloc hero pleine largeur avec image de fond, overlay et texte |
| **GAB Section** | Conteneur de mise en page avec couleurs et espacement personnalisables |
| **GAB Card** | Carte avec image, titre, description et lien |
| **GAB Accordion** | Panneaux dépliables avec support multi-ouverture |
| **GAB Tabs** | Navigation par onglets avec panel synchronisé |

## Prérequis

- WordPress 6.4+
- PHP 8.1+
- Node.js 20+
- Docker Desktop (pour l'environnement local)

## Installation (développement)
```bash
git clone https://github.com/fregent/gutenberg-advanced-blocks.git
cd gutenberg-advanced-blocks
npm install
npm run env:start
npm run start
```

WordPress est accessible sur `http://localhost:8888`
- Login : `admin`
- Mot de passe : `password`

## Build production
```bash
npm run build
```

## Structure du projet
```
src/
└── blocks/
    ├── hero/           # Bloc Hero
    ├── section/        # Conteneur Section
    ├── card/           # Bloc Card
    ├── accordion/      # Accordion parent
    ├── accordion-item/ # Accordion enfant
    ├── tabs/           # Tabs parent
    └── tab-item/       # Tab enfant
```

## Conventions

- Préfixe PHP et CSS : `gab_` / `.gab-`
- Text domain : `gab`
- Indentation : 4 espaces (standard WordPress)
- Commits : [Conventional Commits](https://www.conventionalcommits.org/)

## Licence

MIT