A DELETE metódus

Ahogy a neve is mutatja, a DELETE metódus a HTTP szabványban az erőforrások törlésére van. Ha ilyen metódussal küldesz egy kérést a szervernek, akkor tudni fogja, hogy törölni szeretnél valamilyen adatot.
Törlés a szerveren

Adott valamilyen szerver, ami az adatokat szolgáltatja az alkalmazásodnak. Lépésről lépésre végigvezetlek a törlés folyamatán:

Fetch kérés indítása a szerver felé:

let fetchOptions = {
  method: 'DELETE',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin'
};
fetch("http://localhost:3000/users/"+id, fetchOptions)
  .then( resp => resp.json() )
  .then( json => console.log(json) );

Lehetséges válaszok:

    Az adott erőforrás nem létezik:
    DELETE http://localhost:3000/users/1 404 (Not Found)
    Sikeres törlés esetén üres válasz: {}

Biztonság

Az adatok törlésénél körültekintően kell eljárnod. Az a minimum, hogy felteszel egy biztonsági kérdést, hogy tényleg törölni akarja-e az erőforrást a program kezelője?

if (confirm("Biztosan törli a felhasználót?")) {
  fetch("http://localhost:3000/users/"+id, fetchOptions)
    .then( resp => resp.json() )
    .then( json => console.log(json) );
}

A confirm() metódus true értékkel tér vissza, ha az okét választották, egyébként false a visszatérési érték. Ezt vizsgálom egy if kifejezéssel. Azért nincs else ága az if-nek, mivel ha arra kattintottak, hogy mésgem, akkor nem kell csinálni semmit.