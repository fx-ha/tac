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
- [ ] startseite
  - [ ] calendar
    - [ ] disable all days except event days
    - [ ] onHover/onClick
      - [ ] overlay window
      - [ ] list events for specific date
- [ ] spielplan
  - [ ] style (see pdf)
  - [ ] sort by first date in array
  - [ ] refactor
- [ ] reservierung optional
- [ ] reservierung absender ak@uni bayreuth; passwort siehe mail
- [ ] text bei kontaktseite änderbar
- [ ] datenschutzerklärung abhängig von veranstalter
- [ ] studium
  - [ ] text zum bearbeiten freigeben
- [ ] archiv
  - [ ] pagination
  - [ ] Konzept für verschiedene Archiv-Kategorien überlegen, z.B. für Reviews
- [ ] Cookie Consent https://www.osano.com/cookieconsent/download/
- [ ] seo
  - [ ] description with body < 140 chars
  - [ ] image
- [ ] pwa
- [ ] customize 404 page
- [ ] preview mode
- [ ] title as slug
- [ ] recherche: schriftart selbst wählbar?
- [ ] kenntlich machen, wenn auf websiteüberschrift geklickt, man wieder zurück auf die startseite kommt
- [ ] refactor archiv/spielplan id page

## Inspiration
- https://www.schaubuehne.de/de/start/index.html

## Development
- Tools:
  - Date-Fns
    - https://date-fns.org/docs/
  - React
    - https://reactjs.org/docs/getting-started.html
  - Next.js
    - https://nextjs.org/docs/getting-started
    - https://nextjs.org/learn/basics/create-nextjs-app
  - React Bootstrap
    - https://react-bootstrap.github.io/
    - https://github.com/vercel/next.js/tree/master/examples/with-react-bootstrap
  - React Calendar
    - https://github.com/wojtekmaj/react-calendar#readme
  - PWA
    - https://github.com/vercel/next.js/tree/master/examples/progressive-web-app

npm run dev
Starts the development server.

npm run build
Builds the app for production.

npm start
Runs the built app in production mode.

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
    - kalendar https://www.npmjs.com/package/react-calendar
    - links in infobox /mitmachen#aufrufe /mitmachen#initiativen
  - Spielplan
    - Auflistung aller Aufführungen für das Semester
    - auflistung verlinken
    - Logik (grob)
      - if unique play dates has month
      - activeMonth.push(month)
    - remove test events
  - add month heading
  - mitmachen
    - visuelles konzept, diese zu verstehen und voneinander unterscheiden zu können
    - 'mitmachen' designidee umsetzen
    - replace schaulust logo
    - link to headings
    - initiativen zum bearbeiten freigeben
    - aufrufe zum bearbeiten freigeben
  - studieren
    - content
  - Archiv
    - auflistung vergangener veranstaltungen
    - auflistung verlinken
    - vorläufiger Text für 'archiv'
    - sort by start_date (latest to earliest)
  - eventseite
    - preview bild anzeigen
  - about
    - style
  - kontakt
    - text für 'kontakt'
    - Kontaktformular mit Mail-adresse verlinkt; Kästen für Betreff, Text und Mailadresse der person, die anfragt
  - karten
    - Text für 'karten'
    - datenschutz zustimmen
    - Text unter Kartenreservierung zum Bearbeiten freigeben
    - kartenreservierung mit mail an zuständiges team (event in reservierung ausblenden wenn kein empfänger angegeben)
  - Impressum
  - Datenschutz
    - e-recht24 text
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
- get play dates
  - for event in events
    - playDates.push(event.start_date, end_date)
    - for date in weitere
      - playDates.push(date)
  - return [...new Set(playDates)]
- index: getstaticprops: all upcoming events mit start_date, end_date, weitere
- calendar highlight tiles if tile date exists in playDates
  - if tile has event date
- Großschreibung im Fließtext, Rubriken klein
- Blocksatz bei kürzeren Texten, insbesondere den Beschreibungen bei mitmachen!
