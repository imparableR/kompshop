// u ovom fajlu, koji je vezan sa stranicu ponuda.html
// nalazi se samo jedna promenljiva koja predstavlja
// niz objekata zapisanih u json obliku
// ovi objekti predstavljaju nase proizvode - racunare i laptopove
// i iz ovog fajla cemo uzimati niz kada ispisujemo ponudu
// ili kada pretrazujemo (funkcionalnosti za to su unutar ponuda.js)


var proizvodi = [
    {
        "tip" : "laptop",
        "slika" : "slike/acer.jpg",
        "naslov" : "ACER Aspire A315-33-C13X (NX.GY3EX.016) Intl N3060, 4GB, 500GB",
        "opis" : "Velicina ekrana: 15.6'', Procesor: Intel Celeron DualCore, Memorija: 4GB, Hard disk: 500GB, Graficka karta: Integrisana, Operativni",
        "cena" : 25990
    },
    {
        "tip" : "laptop",
        "slika" : "slike/ediam.jpg",
        "naslov" : "NJOY Ediam (FHD, Intel N4000, 4GB, 32GB SSD, Windows 10 Home)",
        "opis" : "Velicina ekrana: 14'', Procesor: Intel Celeron DualCore, Memorija: 4GB, Hard disk: SSD, Graficka karta: Integrisana",
        "cena" : 27990
    }, 
    {
        "tip" : "desktop",
        "slika" : "slike/des1.jpg",
        "naslov" : "BC GROUP OFFICE BEGINNER AMD E3000, 4GB, 120GB",
        "opis" : "Procesor Integrisani E2-3000 1.3GHz Broj jezgara: 2 Threads: 2 L2 keš memorija: 2MB Integrisani grafički procesor: Radeon HD",
        "cena" : 12855
    }, 
    {
        "tip" : "desktop",
        "slika" : "slike/des3.jpg",
        "naslov" : "BC GROUP LEGIONAR INTEL CELERON G4900, 4GB, 500GB, DVD, WIN 10 HOME",
        "opis" : "Procesor INTEL Celeron G4900 3.1GHz Broj jezgara: 2 Threads: 2 L2 keš memorija: 2 x 256 KB L3 keš memorija: 2MB Integrisani",
        "cena" : 34315
    }, 
    {
        "tip" : "desktop",
        "slika" : "slike/des2.jpg",
        "naslov" : "LENOVO IdeaCentre 310S-08IGM Intel Pentium J5005, 4GB, 1TB (90HX001YYA)",
        "opis" : "Opis procesora Intel® Pentium® Silver J5005 1.50 GHz (4MB keš memorije, do 2.80 GHz) QuadCore Chipset Intel SoC Platform",
        "cena" : 31890
    },
    {
        "tip" : "laptop",
        "slika" : "slike/acer1.jpg",
        "naslov" : "ACER Aspire A315-33-C7MU (NX.H64EX.013) Intel N3060, 4GB, 500GB, Crveni",
        "opis" : "Velicina ekrana: 15.6'', Procesor: Intel Celeron DualCore, Memorija: 4GB, Hard disk: 500GB, Graficka karta: Integrisana, Operativni",
        "cena" : 25990
    }, 
    {
        "tip" : "desktop",
        "slika" : "slike/des4.jpg",
        "naslov" : "HP 290 G2 Microtower, Intel Pentium Gold G5400, 4GB, 500GB HDD, DVD-WR (3ZD10EA)",
        "opis" : "Opis procesora Intel® Pentium® Gold G5400 (3.7 GHz, 2MB keš memorije, 2 jezgra) Tip grafičke karte: Intel® UHD",
        "cena" : 41990
    }, 
    {
        "tip" : "laptop",
        "slika" : "slike/lap1.jpg",
        "naslov" : "HP 250 G6 i3-6006U 4GB 500GB (1WY43EA)",
        "opis" : "Velicina ekrana: 15.6'', Procesor: Core i3, Memorija: 4GB, Hard disk: 500GB, Graficka karta: Integrisana, Operativni sistem: Linux",
        "cena" : 42890
    }, 
]

