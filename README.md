# xmascal – Adventskalender

Ein Adventskalender mit 24 Türchen über einer Hintergrundgrafik.

## Anpassen

Alles Wichtige steht in [`config.js`](config.js):

- **`monat`** – Monat, in dem die Türchen freigeschaltet werden. Zum Testen `11` (November), für den Echtbetrieb `12`.
- **`grafik`** – eigene Grafik nach `bilder/` legen und den Pfad hier eintragen.
- **`dateien`** – pro Türchen eine eigene Datei (HTML, Bild, PDF …), z. B. `3: "tuerchen/03.html"`.
  Türchen ohne Eintrag zeigen die Platzhalter-Seite `tuerchen/tuer.html`.
- **`tueren`** – Position und Größe jedes Türchens in Prozent der Grafik.

Hinweis: Die Datumssperre läuft im Browser. Wer sich auskennt, kann die Dateien direkt aufrufen.
