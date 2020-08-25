// ovaj kod je vezan za pocetnu stranicu
// sluzi za funkcionalnost slajdera na pocetnoj
// i za pomerajuci tekst ispod slajdera


// u nizu pod imenom slike cuvamo u obliku stringova adrese nasih slika za slajder
var slike = [
    "slike/slajder1.jpg",
    "slike/slajder3.jpg",
    "slike/slajder2.jpg",
]

// na pocetnoj stranici nalazi se element sa id-jem slider
// njega cuvamo u promenljivoj i unutar njega ce se smenjivati slike 
var slajder = document.getElementById('slider');
// najpre unutar slajdera postavljamo poslednju sliku u nizu
// kako bi odmah taj element imao neki sadrzaj
slajder.innerHTML = "<img src="+slike[2]+">";

// promenljiva br sluzi da predstavlja index elementa iz niza slike
// pomocu nje menjacemo index iz niza, tj sliku unutar slajdera
var br = 0;

// setInterval je programska funkcija JavaScripta koja prima dva
// ulazna parametra, prvi parametar je funkcija koja treba da si izvrsi
// drugi parametar je period ponavljanja te funkcije
// taj period je izrazen u hiljaditim delovima sekunde
// dakle ovaj interval konkretno ce se izvrsavati za dve sekunde
// nakon dve sekunde menja se slika
setInterval(function() {
    slajder.innerHTML = "<img src="+slike[br]+">";
    // unutar elementa postavljamo sliku na osnovu adrese iz niza
    // za index koristimo promenljivu br, nakon sto postavimo
    // br se povecava za jedan, kako bi tokom sledeceg izvrsenja
    // funkcije bila postavljena nova slika
    br++;
    if (br == 3) br = 0;
    // ukoliko br stigne do 3 to znaci da smo stigli do kraja niza
    // pa onda vracamo vrednost br na 0, kako bi se vratili na prvu sliku
    // to dakle omogucava da se slike smenjuju u krug
}, 2000)

// kod koji sledi vezan je za pomerajuci tekst na pocetnoj

// promenljiva pos ce sluziti da pomera css svojstvo left elementa (za koliko je pomeren u levo)
var pos = 0;
// promenljiva direction je stepen pomeranja, kasnije cemo pomocu nje menjati vrednost
// promenljive pos, sto znaci da je svaki put menjamo za 1
var direction = 1;
// u promenljivoj cuvamo tekst koji treba pomerati
var tekst = document.getElementById('setajuciTekst');

// kreiramo interval
setInterval(function() {
    // vrednost promenljive pos povecavamo za vrednost promenljive direction
    // dakle za jedan
    pos += direction;
    // ukoliko je vrednost pos dosla do 100 ili do -100 menjamo znak promenljive
    // direction od 1 u -1 i obratno
    // to omogucava da tekst ide levo desno
    // jer dok je direction u plusu tekst ide na desno
    // kada je u minusu tekst ide na levo
    if (pos >= 100 || pos <= -100) direction = 0 - direction;
    // css svojstvo left naseg elementa podesavamo tako da je jednako 
    // vrednosti promenljive pos
    tekst.style.left = pos + "px";
},25)