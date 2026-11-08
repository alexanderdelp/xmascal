// ============================================================
//  Adventskalender – Konfiguration
// ============================================================
window.KALENDER = {
  // Monat, in dem die Türchen freigeschaltet werden (1 = Januar … 12 = Dezember).
  // Zum Testen steht hier 11 (November). Für den Echtbetrieb auf 12 setzen.
  monat: 11,

  // Hintergrundgrafik. Einfach durch die eigene Datei ersetzen.
  // Die Türchen-Positionen sind in Prozent angegeben und passen sich jeder Bildgröße an.
  grafik: "bilder/platzhalter.svg",

  // Datei, die angezeigt wird, wenn für ein Türchen (noch) keine eigene hinterlegt ist.
  // "{nr}" wird durch die Türchen-Nummer ersetzt.
  standardDatei: "tuerchen/tuer.html?nr={nr}",

  // Eigene Dateien pro Türchen (HTML-Seite, Bild, PDF, Video …).
  // Beispiel:  3: "tuerchen/03.html",   7: "tuerchen/bild07.jpg"
  dateien: {
  },

  // Position jedes Türchens auf der Grafik in Prozent:
  //   x/y = linke obere Ecke, b/h = Breite/Höhe
  tueren: [
    { nr:  1, x: 72, y:  8, b: 10, h: 15 },
    { nr:  2, x: 18, y: 54, b: 10, h: 15 },
    { nr:  3, x: 47, y: 30, b: 10, h: 15 },
    { nr:  4, x:  4, y: 32, b: 10, h: 15 },
    { nr:  5, x: 86, y: 52, b: 10, h: 15 },
    { nr:  6, x: 33, y:  6, b: 10, h: 15 },
    { nr:  7, x: 59, y: 76, b: 10, h: 15 },
    { nr:  8, x: 17, y: 10, b: 10, h: 15 },
    { nr:  9, x: 62, y: 53, b: 10, h: 15 },
    { nr: 10, x: 31, y: 77, b: 10, h: 15 },
    { nr: 11, x: 87, y: 29, b: 10, h: 15 },
    { nr: 12, x: 46, y: 54, b: 10, h: 15 },
    { nr: 13, x:  3, y: 77, b: 10, h: 15 },
    { nr: 14, x: 59, y:  9, b: 10, h: 15 },
    { nr: 15, x: 74, y: 76, b: 10, h: 15 },
    { nr: 16, x: 19, y: 32, b: 10, h: 15 },
    { nr: 17, x: 87, y:  7, b: 10, h: 15 },
    { nr: 18, x: 33, y: 54, b: 10, h: 15 },
    { nr: 19, x: 73, y: 31, b: 10, h: 15 },
    { nr: 20, x:  3, y: 10, b: 10, h: 15 },
    { nr: 21, x: 45, y: 77, b: 10, h: 15 },
    { nr: 22, x: 32, y: 30, b: 10, h: 15 },
    { nr: 23, x:  4, y: 54, b: 10, h: 15 },
    { nr: 24, x: 46, y:  6, b: 10, h: 15, gross: true },
    // Hinweis: Türchen 24 ist als "gross" markiert und wird hervorgehoben.
  ],
};
