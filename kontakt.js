// Ovaj kod je vezan za stranicu kontakt.html

// ova funkcija se pokrece kada se klikne na potvrdi na stranici kontakt
function provera() {
    // najpre pristupamo input poljima unutar form elementa
    // njih selektujemo na osnovu name vrednosti za formu 
    // i name vrednosti za input polje
    var ime = document.kontakt.ime;
    var email = document.kontakt.email;
    var tema = document.kontakt.tema;
    var poruka = document.kontakt.poruka;
    // na vrhu forme nalazi se p element ciji je sadrzaj prazan
    // unutar njega cemo ispisivati koja greska je u pitanju 
    // i njega selektujemo na sledeci nacin:
    var greska = document.getElementById('greska');

    // try - catch blok unutar koga proveravamo da li su input polja
    // pravilno popunjena.
    // try catch blok funkcionise na sledeci nacin:
    // izvrsava se kod unutar try bloka, ukoliko se unutar njega
    // naidje na throw, odmah se izvrsenje prebacuje na catch blok
    // a vrednost ulaznog parametra error postaje ono sto je naznaceno
    // nakon throw - npr ukoliko se naidje na sledece
    // throw "Molimo popunite sva polja";
    // onda vrednost promenljive error postaje "Molimo popunite sva polja"
    try {
        // najpre proveravamo da li su popunjena sva polja
        // ukoliko bilo koje nije popunjeno bice greska
        if (ime.value == '' || email.value == ''
            || tema.value == '' || poruka.value == '') {
                throw "Molimo popunite sva polja";
        } else {
            // proveravamo da li je za ime uneto bar 5 karaktera
            if (ime.value.length < 5) {
                throw "Potpis mora sadrzati bar 5 karaktera";
            }
            // proveravamo da li je email pravilno unet,
            // indexOf funkcija vraca poziciju prosledenog parametra
            // unutar stringa za koji se poziva
            // u ovom slucaju pozivamo za vrednost unetu u input polje za email
            // i kao ulazni parametar saljemo  '@'.
            // ukoliko se ne sadrzi funkcija vraca -1 i tada znamo da je doslo do greske
            // ukoliko se sadrzi funkcija ce vratiti bilo koji broj veci od -1
            // taj broj zavisi od pozicije '@' unutar stringa
            // nama ta pozicija nije vazna, ali vazno je da postoji unutar stringa
            // jer ako postoji onda nema greske
            else if (email.value.indexOf('@') == -1) {
                throw "email nepravilno unet";
            } 

            // ukoliko je izvrsenje dospelo ovde to znaci da greske nema
            // u tom slucaju odmah izbacujemo poruku o uspehu
            // i pritom sve vrednosti svih input polja postavljamo na prazno
            else {
               confirm("vasa poruka je uspesno poslata");
               ime.value = email.value = tema.value = poruka.value = greska.innerHTML = "";
            }
        }
    } catch (error) {
        // ukoliko je izvrsenje dospelo ovde, to znaci da je bilo greske
        // unutar paragrafa na vrhu ispisujemo tip greske koju smo dobili preko throw
        // (vidi gore)
        greska.innerHTML = error;
    }
}