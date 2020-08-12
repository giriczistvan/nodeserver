POST
Ez feldolgozandó adatot küld fel a szerverre. Például HTML űrlap tartalmát, vagy egy fetch kérésben lévő adatokat. Az adatot az üzenettest tartalmazza.

Új felhasználó létrehozása
Ahhoz, hogy adatot küldj a szervernek, használhatod a POST vagy a PUT metódust is. Mindkettővel fel tudod tölteni az adatokat, a legtöbbször a szerver készítője mondja meg, hogy melyiket mikor használhatod. A mi példánkban a POST-ot használjuk a Create művelehtez, azaz új adatok létrehozásához.

let user = {
  name: "Peter Big",
  age: 21
};
let fetchOptions = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'same-origin',
  body: JSON.stringify( user )
};
fetch( "http://localhost:3000/users/", fetchOptions )
  .then( resp => resp.json() )
  .then( json => console.log(json) );
Fontos megjegyzések!
Nézd meg jól a kódot, mert lényeges különbségek vannak benne egy GET kéréshez képest.

Létrehoztam egy user objektumot, ezt küldöm a szervernek.
A fetchOptions tartalmaz egy új tulajdonságot, headers a neve. Itt adtam meg, hogy json formátumban küldöm majd az adatokat, különben a szerver nem tudná feldolgozni őket.
body: ez a tulajdonság adja meg az adatokat, amelyeket a szervenek fogok küldeni. Mivel azt mondtam a fejlécben, hogy json lesz a formátum, ezért a user objektumot json formátumra kell alakítanom.
A válaszban az újonnan létrejött usert kapom vissza. Az id tulajdonságot nem szokták megadni, mivel azt a szerver általában automatikusan hozza létre. A válasz így néz ki az én esetemben:
{name: "Peter Big", age: 21, id: 4}