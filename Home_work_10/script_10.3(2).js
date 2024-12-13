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

function Contact({ name, phone, email }) {
  this.id = phone + 123;
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
  const foundContact = this.contacts.find((contact) => contact.name === name);
  if (foundContact) {
    return foundContact;
  } else return null;
};

Book.prototype.add = function (contact) {
  const newContact = new Contact(contact);
  this.contacts.push(newContact);
};

Book.prototype.remove = function (id) {
  const index = this.contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    this.contacts.splice(index, 1);
    return true;
  }
  return null;
};

Book.prototype.update = function (id, updatedData) {
  const contact = this.contacts.find((contact) => contact.id === id);
  if (contact) {
    Object.assign(contact, updatedData);
    return true;
  }
  return null;
};

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

console.log(book.remove("+380999999999123"));

book.update("+305025825367123", { name: "Tom" });

console.log(book);
