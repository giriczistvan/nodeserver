JSON.parse()

A parse metódussal tudod a JSON stringet újra objektummá alakítani. Tehát a JSON az egy string. Ha szeretnéd úgy használni a benne lévő adatokat, mint tömb vagy objektum elemeket, akkor vissza kell alakítani változóvá, hogy újra objektum legyen.

json parse
JSON.stringify()

A stringify metódussal pedig az objektumokat vagy tömböket lehet json-izálni. Ekkor készít belőlük egy JSON stringet a JS, ezt pedig küldhetjük a szervernek vagy másik alkalmazásnak is.

json str

const asyncCall = () => {
    setTimeout(() => {
      return {message: "Ez egy időzített üzenet."};
    }, 2000);
  };
  const value = asyncCall();
  console.log(value.message);

function buttonClickHandler = () => console.log('Kattintottál');
const button = document.querySelector('#submitButton');
button.addEventListener('click', buttonClickHandler);
...
console.log('Utolsó utasítás');
Szerver

Eddig kizárólag frontend oldalon dolgoztunk, ami azt jelenti, hogy azokat a kódokat írtuk meg, amelyek a böngészőben futnak le. Most full-stack fejlesztő válik belőled, azaz képessé teszünk arra, hogy ne csak a frontend, hanem a szerver oldali kódokat is elkészítsd.

A szerver a szolga szóból jön, az a dolga, hogy a frontend felől jövő kéréseket kiszolgálja, azokra választ adjon. Ezek a válaszok lehetnek fájlok, adatok, JSON string-ek, bármi.
json-server

A json-server egy olyan NodeJS csomag, amivel egy perc alatt tudsz készíteni egy szervert, ami JSON válaszokat küld neked a kérésekre. Tökéletes választás, ha szeretnéd tesztelni az alkalmazásodban a klient-server kommunikációt.
Telepítés

    Hozz létre egy mappát a projektednek.
    npm init -y : generáltasd le a package.json fájlt.
    npm install -g json-server : a json-server telepítése globálisan javasolt, mivel így tudod indítani a parancssorból is és elérhető lesz az összes projektedben.

    Hozz létre egy JSON fájlt mondjuk db.json néven a kívánt tartalommal. Egy objektum legyen a gyökere, és ebben az egyes tulajdonságok tömbök. Ezek lesznek az adattáblák:

    {
      "users": [
        { "id": 1, "name": "Big Tom", "email": "bigtom@gmail.com" },
        { "id": 2, "name": "Little Jimmy", "email": "littlejimmy@gmail.com" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "userId": 1 }
      ]
    }

        Fontos: legyen mindegyik objektumban egy id tulajdonság és lehetőleg 1-gyel kezdődjön.

    json-server --watch db.json : figyeli a JSON fájlt a szerver, ha módosul. Ezenkívül elindul és lehet neki kéréseket küldeni. Ki fogja írni, hogy melyik proton fut, alapból a 3000 lesz, de ezt meg is változtathatod.
    Nyisd meg a böngészőben: http://localhost:3000/users. Meg fogod kapni JSON formátumban ausers tömböt, és már kezdheted is tesztelni az alkalmazásodat, hogyan tud együtt működni egy szerverrel.

README.md

Ha rákeresel a json-server csomagra a GitHub-on, akkor találni fogsz részletes dokumentációt is. Érdemes ezt áttanulmányozni, mielőtt elakadnál. A github úgy működik, hogyha van a repóban egy 

live server újratöltés letiltása
A beállításhoz itt találod a teljes dokumentációt:

liveServer.settings.ignoreFiles