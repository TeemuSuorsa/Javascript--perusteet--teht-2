const readline = require("readline-sync");

const phonebook = [];

//testi dataa
const person1 = {
  name: "Matti",
  phone: "0401234567",
};
const person2 = {
  name: "Teppo",
  phone: "0501234567",
};
const person3 = {
  name: "Pirkko",
  phone: "0601234567",
};
const person4 = {
  name: "Liisa",
  phone: "0701234567",
};
phonebook.push(person1, person2, person3, person4);

//functio jolla lisätään henkilö puhelinluetteloon
function addPerson() {
  const name = readline.question("Anna nimi: ");
  const phone = readline.question("Anna puhelinnumero: ");
  const person = {
    name: name,
    phone: phone,
  };
  phonebook.push(person);
  console.log(person.name + " lisätty puhelinluetteloon");
}

//Funckio jolla haetaan henkilön puhelinnumero
function search(phonebook) {
  let name = readline.question("Anna haettava nimi: ").toLowerCase(); // Muutetaan syöte pieniksi kirjaimiksi
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name.toLowerCase() === name) {
      // muutetaan ja verrataan luettelossa olevia nimiä pienillä
      console.log("Puhelinnumero: " + phonebook[i].phone);
      return;
    }
  }
  console.log("Henkilöä ei löytynyt.");
}

let open = true; // Muuttuja jolla ohjataan ohjelman toimintaa
while (open) {
  console.log("Valitse toiminto");
  console.log("1. Lisää henkilö");
  console.log("2. Hae henkilön puhelinnumero");
  console.log("3. Lopeta");

  let choice = readline.question("1-3: ");

  switch (choice) {
    case "1":
      addPerson();
      break;
    case "2":
      search(phonebook);
      break;
    case "3":
      open = false;
      break;
  }
}
