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