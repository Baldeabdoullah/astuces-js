// 1 comment ajouter conditionnelement des proprietes a un objet
// Nous allons voir comment utiliser l'operateur de propagation
// spreed operator

// let condition = true;

// let personne = {
//   id: 1,
//   nom: "Kamdjou",
//   ...(condition && { age: 25 }),
// };

// console.log(personne);

// 2 verifier si une propriete existe dans un objet
// Nous allons voir comment utiliser le mot cle IN
// Pour verifier si un objet contient une propriete

// let personne = {
//   nom: "Kamdjou",
//   salaire: 100000,
// };

// console.log("age" in personne);
// console.log("salaire" in personne);

//3 comment ajouter un nom de propriete
// de facon dynamique dans un objet javascript

// const dynamic = "favorite";
// let item = {
//   nom: "Biscuit",
//   [dynamic]: "Chocolat",
// };

// console.log(item);

// 4 comment destructurer les proprietes d'un objet en javascript
const person = { id: 1, name: "john doe" };
const { id, name } = person;
//console.log(name);

const { id: identifiant } = person;
console.log(identifiant);

console.log(id);
