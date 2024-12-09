const contacts = [
  {
    name: "Serhii",
    phone: "+380999999999",
    email: "example@email.com",
  },
  {
    name: "Anastasiia",
    phone: "+48555666777",
    email: "example@email.com",
  },
  {
    name: "Anna",
    phone: "+380677894556",
    email: "example@email.com",
  },
];

let idNumber = 1;

function Contact({ name, phone, email }) {
  this.id = idNumber++;
  this.name = name;
  this.phone = phone;
  this.email = email;
}

const mappedContacts = contacts.map((el) => {
  return new Contact(el);
});

function Book(contacts) {
  this.contacts = contacts;
}

const book = new Book(mappedContacts);

Book.prototype.find = function (name) {
  const contact = this.contacts.find((contact) => contact.name === name);
  if (contact) {
    return contact;
  } else return "no contact";
};

Book.prototype.add = function (contact) {
  const newContact = new Contact(contact);
  this.contacts.push(newContact);
};

Book.prototype.remove = function (id) {
  const contactToDelete = this.contacts.find((el) => el.id === id);
  if (contactToDelete) {
  }
};

// Book.prototype.update = (id) => {
// };

// const mappedContacts = contacts.map((el) => {
//   return new Contact(el);
// });

// const book = new Book(mappedContacts);

// console.log(book);

const resultFind = book.find("Anastasiia");
console.log(resultFind);

book.add({
  name: "John",
  phone: "+305025825367",
  email: "ladygaga@email.com",
});

book.add({
  name: "Sarah",
  phone: "+305025825367",
  email: "gusigusi@email.com",
});

console.log(book);
