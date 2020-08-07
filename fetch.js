Fetch

A Fetch API a még callback függ használó XMLHttpRequest kiváltására jött létre.
Mind Google, mind Mozilla bácsi támogatja már a használatát.
Különválasztották a kérést és a választ, valamint egyszerűbb a szintaxis,
és könnyebb egyéni headeröket beállítani.

A gyakorlatbakérünk egy json formátumú adatot, és belerakjuk egy változóba. 
Figyeld meg, a fecth() egy Promise-szal tér vissza!

Megjegyzés: üzemelj be egy json-server-t, és annak küldd a kéréseket!

let fetchInit = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default"
};
const fetchData = fetch("http://localhost:3000/users", fetchInit);
fetchData.then(data => data.json()).then(data => console.log(data));
Kombináljuk!

A fetch() egy Promise-szal tér vissza, amit bátran használunk is. Elkérjük a JSON-t, és feldolgozzuk, mint az imént:

const postPromise = fetch("http://localhost:3000/users");
postPromise
  .then(data => data.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
