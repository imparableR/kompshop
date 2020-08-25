// ovaj js fajl je vezan za stranicu ponuda.html
// ista ta stranica je najpre vezana za fajl proizvodi.js
// unutar koga se nalazi niz objekata koji predstavljaju proizvode
// posto su oba fajla povezana na istu stranicu
// unutar ovog fajla imamo pristup promenljivoj proizvodi
// koja se nalazi u fajlu proizvodi.js (pogledaj taj fajl)


// na stranici ponuda nalazi se element koji ima id ponuda
// on je u pocetku prazan, a unutar njega cemo izlistavati
// objekte iz naseg niza proizvoda
// najpre selektujemo taj element i cuvamo ga unutar promenljive
var ponuda = document.getElementById('ponuda');

// ova funkcija sluzi za ispisivanje kartica koje predstavljaju
// proizvode, ima dva ulazna parametra min i max, koji se odnose na cenu
function ispisProizvoda(min, max) {
    // najpre unutar elementa brisemo sav sadrazaj
    ponuda.innerHTML = ""; 
    // zatim pomocu petlje prolazimo kroz niz objekata
    for (var i = 0; i < proizvodi.length; i++) {
        // ukoliko je cena trenutnog objekta iz niza veca od min,
        // i istovremeno manja od max
        if (proizvodi[i].cena >= min && proizvodi[i].cena <= max) 
        {
            // unutar elementa upisujemo sledeci html sadrzaj
            // a za vrednosti pojedinacnih elemenata postavljamo
            // informacije iz objekta (za trenutni objekat na osnovu indeksa u nizu)
            ponuda.innerHTML += 
            '<section>' +
                '<img src="'+proizvodi[i].slika+'" alt="">' +
                '<h3>'+proizvodi[i].naslov+'</h3>' +
                '<p>'+proizvodi[i].opis+'</p>' +
                '<h4>'+proizvodi[i].cena+' din</h4>' +
            '</section>';
        }
    }
}

// odmah je pozvana funkcija i prosledene su ovakve vrednosti
// da bi nam sigurno pokazalo sve proizvode
ispisProizvoda(0, 9999999999);

// ova funkcija je vezana za radio buttons sa leve strane na stranici
// kada se klikne na bilo koji od njih ona se pokrece
function pretragaCena() {
    // uzece vrednost kliknutog radio buttona u promenljivoj cena
    // te vrednosti mogu da budu od 0 do 10 (pogledaj html)
    var cena = Number(document.cena.cena.value);

    // u zavisnosti od toga koja je vrednost radio buttona
    // pozvacemo funkciju za ispis sa razlicitim vrednostima
    // za ulazne parametre, na osnovu toga
    // dobicemo prikazane samo one racunare cija je cena veca
    // od vrednosti prvog i manja od vrednosti drugog ulaznog parametra
    switch (cena) {
        case 0:  ispisProizvoda(0, 9999999999); break;
        case 1:  ispisProizvoda(0, 10000);      break;
        case 2:  ispisProizvoda(10000, 20000);  break;
        case 3:  ispisProizvoda(20000, 30000);  break;
        case 4:  ispisProizvoda(30000, 40000);  break;
        case 5:  ispisProizvoda(40000, 50000);  break;
        case 6:  ispisProizvoda(50000, 60000);  break;
        case 7:  ispisProizvoda(60000, 70000);  break;
        case 8:  ispisProizvoda(70000, 80000);  break;
        case 9:  ispisProizvoda(80000, 90000);  break;
        case 10: ispisProizvoda(90000, 100000); break;
        default: break;
    }
}

// ova funkcija sluzi za pretragu po tipu
// ona se poziva kada se klikne na laptopovi ili racunari gore u hederu
// (vidi html), u prvom slucaju se za vrednost ulaznog parametra tip
// salje 'laptop' u drugom 'desktop'
// ovo su dve moguce vrednosti za atribut tip, za svaki objekat iz naseg niza

function pretragaPoTipu(tip) {
    ponuda.innerHTML = ""; 
    for (var i = 0; i < proizvodi.length; i++) {
        // poredimo vrednost atributa tip za nas objetak trenutni iz niza
        // i dobijenu vrednost ulaznog parametra tip
        // na taj nacin prikazujemo samo desktop racunare ili samo laptopove
        if (proizvodi[i].tip == tip) 
        {
            ponuda.innerHTML += 
            '<section>' +
                '<img src="'+proizvodi[i].slika+'" alt="">' +
                '<h3>'+proizvodi[i].naslov+'</h3>' +
                '<p>'+proizvodi[i].opis+'</p>' +
                '<h4>'+proizvodi[i].cena+' din</h4>' +
            '</section>';
        }
    }
}

// ova funkcija se pokrece kada se ukuca nesto i klikne na dugme
// pretrazi u headeru
function pretragaPoNazivu() {
    // termin za pretragu dobijamo iz input polja i konvertujemo 
    // unos u velika slova (tome sluzi funkcija toUpperCase)
    var termin = document.naziv.pretraga.value.toUpperCase();
    ponuda.innerHTML = ""; 
    for (var i = 0; i < proizvodi.length; i++) {

        
        // uzimamo naslov za trenutni objekat i konvertujemo ga u velika slova
        // pa ispitujemo da li se unutar njega sadrzi uneti termin

        // i naslov i uneti termin konvertovani su u velika slova
        // zbog toga nam uvek pokazuje sve sto sadrzi nas termin pretrage
        // bez obzira da li su slova velika ili mala

        // za pojasnjene funkcije indexOf() pogledaj objasnjene za
        // stranicu kontakt.js gde se opisuje provera emaila
        if (proizvodi[i].naslov.toUpperCase().indexOf(termin) > -1) 
        {
            ponuda.innerHTML += 
            '<section>' +
                '<img src="'+proizvodi[i].slika+'" alt="">' +
                '<h3>'+proizvodi[i].naslov+'</h3>' +
                '<p>'+proizvodi[i].opis+'</p>' +
                '<h4>'+proizvodi[i].cena+' din</h4>' +
            '</section>';
        }
    }
}