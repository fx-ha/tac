# tac-frontend
Next.js Frontend for Theater am Campus

## tac style
- tac schriftart 1  (real head pro medium italic)
- tac schriftart 2  (real head pro book)
- #e94e1b (rot-orange)
- #2f4899 (dunkelblau)
- #f08048 (hellorange)
- #2c98d5 (hellblau)
- #000000 (schwarz)
- #ffffff (weiß)

## TO DO
- kenntlich machen, wenn auf websiteüberschrift geklickt, man wieder zurück auf die startseite kommt
- vorläufiger Text für 'archiv':
>an der uni bayreuth ist in den letzten jahren schon sehr viel theaterkultur entstanden.
hier gibt es einblicke in die bereits entstandenen projekte unserer studierenden!
- recherche: schriftart selbst wählbar?
- kartenreservierung mit mail an zuständiges team
- EventList param: isArchived
  - false: reihenfolge älteste zuerst
  - true: reihenfolge neueste zuerst
- refactor archiv/spielplan id page
- pagination
- index
  - kalendar https://www.npmjs.com/package/react-calendar
- spielplan & archiv
  - style
- theaterinitiativen
  - 'mitmachen' designidee umsetzen
- kontakt
  - google maps
- impressum
  - style
- datenschutz
  - style
  - e-recht24 text
- Cookie Consent https://www.osano.com/cookieconsent/download/
- pwa
- customize 404 page
- preview mode
- title as slug
- seo
  - description with body < 140 chars
  - image

## Inspiration
- https://www.schaubuehne.de/de/start/index.html

## Development
- Tools:
  - React
   - https://reactjs.org/docs/getting-started.html
  - Next.js
   - https://nextjs.org/docs/getting-started
   - https://nextjs.org/learn/basics/create-nextjs-app
  - React Bootstrap
   - https://react-bootstrap.github.io/
   - https://github.com/vercel/next.js/tree/master/examples/with-react-bootstrap
  - PWA
   - https://github.com/vercel/next.js/tree/master/examples/progressive-web-app

npm run dev
Starts the development server.

npm run build
Builds the app for production.

npm start
Runs the built app in production mode.

rafce snippet for pages/components

## Done
- install typescript
- install sass
- install react bootstrap
- publish to vercel
- seiten:
  - Startseite
    - kurze Vorstellung Theater am Campus
    - aktuelle Informationen - bezüglich Corona sowie zeitnahen Veranstaltungen
    - möglicherweise einen Kalender - wie etwa auch bei der Schaubühne zu sehen ist
    - style
    - infobox als card? (z.b. corona)
    - nächste veranstaltungen
    - Startseite header foto als slider oder nebeneinander, um sowohl das theater am campus als solches als auch die Arbeit, die entsteht, zu verdeutlichen. siehe 2.foto im anhang. (übergangsfoto und leider hochkant, aber vielleicht lässt es sich ja trotzdem kombinieren)
  - Spielplan
    - Auflistung aller Aufführungen für das Semester
    - auflistung verlinken
  - Theaterinitiativen
    - visuelles konzept, diese zu verstehen und voneinander unterscheiden zu können
  - Archiv
    - auflistung vergangener veranstaltungen
    - auflistung verlinken
  - about
    - style
  - kontakt
    - text für 'kontakt'
  - karten
    - Text für 'karten'
  - Impressum
  - Datenschutz
- html lang attribute
- refactor EventList
- EventList wiederverwenden für archiv
- .env variable mit link zu api
- navigation
  - header image (tac logo)
  - aktualisiere 'theater am campus'-schriftzug
  - Designerin würde schriftzug "theater am campus" erstellen für Header der Website -> auf unser aktuelles logo beziehen
  - bestimmte Schrift verwenden, die charakteristisch für die Marke "theater am campus" stehen soll (siehe anhang)
  - Rubrik 'Theaterinitiativen' umbenennen in 'mitmachen!'
  - Rubrik 'über uns' in 'über den tac' umbenennen
  - neue Rubrik: 'karten'. bitte neben 'über das tac' packen. weitere infos dazu folgen bald!
  - Rubrik 'archiv' rechts von 'karten' packen
  - social icons instagram-account und facebook-seite verlinken
  - kleine farbakzente: Rubriken mouseover statt underline blau oder orange färben (farbschema siehe anhang)
- schriftart manrope
- copy schaubuehne.de
- upgrade to next 10.0.8 to fix sharp error
