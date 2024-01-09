const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "Hej",
  "Ahoj",
  "Kamusta",
  "Namaste",
  "Salaam",
  "Merhaba",
  "Sveiki",
  "Salut",
  "Konnichiwa",
  "Szia",
  "Olá",
  "Zdravstvuyte",
  "Aloha",
  "Shalom",
  "Jambo",
  "Sawubona",
];

// function that returns random greeting
export function getGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}
