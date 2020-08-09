A Promise egy aszinkron hívást körbeölelő objektum,
 amely a művelet aktuális állapotát hordozza magában.
 Minden Promise egyetlen egyszer futhat le, és a futás eredménye csak sikeres vagy sikertelen lehet.
 Az eredménytől függően képes a megfelelő callback metódusokat meghívni.

 Promise állapotok

Egy promise a következő állapotokkal rendelkezhet:

    fulfilled : vagyis teljesített, ha az aszinkron művelet sikeresen
    rejected : lefutott, ha az aszinkron művelet sikertelen volt
    pending : ha a művelet még fut
    settled : ha az aszinkron hívás már megtörtént, függetlenül a sikerességétől

Az alábbi kép szépen szemlélteti a Promise-ok lefutását, állapotait:
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error("Error message"));
    }, 3000);
  });
  myPromise
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });

    A Promise-nak két paramétert adtunk.
     Az egyik a resolve, a másik a reject. Mindkettő egy-egy függvény.
      A resolve-ot akkor hívjuk meg, ha megfelelően futott le a folyamat,
       a reject-et pedig akkor, ha valamilyen hiba történt.
        Ha bármelyik függvény meghívásra kerül, a Promise megszűnik létezni.
         Egy Promise-ra csak az egyiket lehet meghívni.
     Mindkettő függvény paraméterezhető is ha szükség van rá.

     const datas = [
        { firstName: "John", lastName: "Doe", age: 31 },
        { firstName: "Jane", lastName: "Doe", age: 20 },
        { firstName: "Anonim", lastName: "Anonymous", age: 62 }
      ];
      
      function postDataFunc(age) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const post = datas.find(postdata => postdata.age === age);
            if (post) {
              resolve(post);
            } else {
              reject(Error("Data not found"));
            }
          }, 3000);
        });
      }
      
      postDataFunc(31)
        .then(post => {
          console.log(post);
          return post;
        })
        .then(post => {
          console.log("Name:", post.firstName, post.lastName);
        })
        .catch(err => {    console.error(err);  });
      // Name: John Doe
      
      A fenti Promise már egy fokkal összetettebb.
      
          A postDataFunc-be megadunk egy életkort.
          Ezen belül a Promise-nak megadjuk a resolve, és reject paramétereket.
          Indítunk egy setTimeout-ot. Ez egy aszinkron művelet, ezt fogja körbe a Promise.
          A post egy boolean, azaz hogy van e találatunk vagy nincs.
           Azaz megnézzük,hogy a tömbünkbe van e olyan objektum, 
           ahol az age egyenlő a megadott értékkel.
          Ha nem volt találatunk a reject-et hívjuk meg.
          Ha volt találatunk a resolve-ot hívjuk meg.
          Meghívjuk a függvényt jelenleg a 31 paraméterrel. 
          A függvényünk visszatérési értéke a Promise.
          Három másodperc múlva kiírja, hogy: Name: John Doe.
           (Ha nem talált akkor pedig: not found.)
          A catch a hibakezelésre van.

A következő példában egy újabb remek használatát láthatjátok a Promise-nak.
Két Promise hozunk létre. A Promise.all() annyit tesz, hogy a paraméterként megadott,
jelen esetben kettő darab Promise-ból egy darab összegyúrt Promise-t ad vissza.
Ez az összetett Promise akkor lesz teljesített, 
ha a magába foglalt Promise-ok mindegyike lefutott.

Az alábbi példában az egyik 3 a másik 10 másodperc után fut le.
 Így a későbbi időpontban, tehát 10 másodperc múlva lesz mind a kettő teljesítve
  (Ne feledjük, aszinkron futnak!)

const cat = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      sound: "miau",
      loyal: false
    });
  }, 10000);
});
const dog = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      sound: "vau",
      loyal: true
    });
  }, 3000);
});

Promise.all([cat, dog]).then(responses => {
  const [catProps, dogProps] = responses;
  console.log(catProps, dogProps);
});

