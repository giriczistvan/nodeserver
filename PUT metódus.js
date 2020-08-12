PUT kérés
A PUT kérések a megadott erőforrást feltöltik a szerverre. Ebből a szempontból nagyon hasonlóak a POST -hoz.

Adatok módosítása
Mi most a PUT kérést fogjuk az adatmódosításra használni. Ezért a body-ban, el fogjuk küldeni a szervernek a módosítandó adatokat, az url pedig az id mezőt is tartalmazni fogja, hogy meg tudja állapítani a szerver, hogy melyik felhasználót szeretnénk módosítani.

let user = {
  name: "Micky Big",
  age: 21
};
let fetchOptions = {
  method: 'PUT',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
  body: JSON.stringify( user )
};
fetch( "http://localhost:3000/users/3", fetchOptions )
  .then( resp => resp.json() )
  .then( json => console.log(json) );
A frissítés két dologban tér el a létrehozástól:

A metódus PUT.
A fetch url végén meg kell adni az id-t, hogy tudja a szerver hogy melyik user-t kell módosítani.
Ezt a választ kaptam: {name: "Micky Big", age: 21, id: 3}, látod, az id változatlan, az adatok viszont módosultak.