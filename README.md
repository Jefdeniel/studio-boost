# Eleventy Statische Website - Studio Boost

Dit is een schoolopdracht waarbij een statische website wordt gemaakt met behulp van Eleventy, een eenvoudige statische site-generator, en PostCSS, een tool voor het transformeren van CSS. De website wordt gebouwd met behulp van HTML, CSS en JavaScript, en wordt gegenereerd met behulp van de Eleventy-sjabloonengine en PostCSS voor het optimaliseren en transformeren van CSS.

## Vereisten

Om deze statische website met Eleventy en PostCSS te kunnen bouwen, heb je de volgende software en tools nodig:

    Node.js (versie 14 of hoger)
    npm (de pakketmanager voor Node.js, wordt meegeleverd met Node.js)

## Installatie

Clone de repository naar je lokale omgeving:

```
git clone  https://github.com/pgmgent-ui-prototyping/studio-boost-Jefdeniel
```

Installer npm. Nu verschijnt de **node_modules** folder.

```
npm install
```

## Gebruik

Na de installatie kun je de volgende npm-scripts gebruiken om de website te bouwen, te bekijken en te publiceren:

Open een terminal en split deze in twee stukken. Run beide commando's simultaan:

- **npm run dev**: Bouwt de website en start een lokale ontwikkelingsserver om de website in je browser te bekijken. De website wordt gegenereerd in de "build" folder.
- **npm run css**: genereert de postcss die wordt ingeladen.

## Structuur

- `src/`: Bronbestanden van de website
  - `_data/`: Gegevensbestanden voor Eleventy
  - `_layouts/`: Sjabloonlay-outs voor de website
  - `_partials/`: Herbruikbare sjabloononderdelen
  - `assets/`: Statische bronbestanden (bijv. CSS, JS)
  - `pages/`: Alle pagina's (.njk, enkel .md voor blogposts/projecten)
- `.eleventy.js`: Configuratiebestand voor Eleventy
- `.eslintrc.js`: Linting bestand voor ESLint
- `.prettierrc`: Configuratiebestand voor Prettier
- `.postcss.config.js`: Configuratiebestand voor PostCSS

## Beperkingen

- problemen met het inladen van JS-files om automatisch jaartal in footer te zetten, datum om te zetten (YAML > leesbare notatie) en jSON-files inladen voor partner array (zie \_partials)
- favicon inladen
- items in header en volgorde naar keuze plaatsen
- design finaliseren
