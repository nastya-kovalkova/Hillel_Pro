const book = {
  contacts: [
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
  ],
  find: function (name) {
    const contact = this.contacts.find((el) => el.name === name);
    if (contact) {
      return contact;
    } else return "no contact";
  },
  add: function (contact) {
    this.contacts.push(contact);
  },
};

const contact = book.find("Anna");
console.log(contact);

book.add({
  name: "John",
  phone: "+30502582536",
  email: "ladygaga@email.com",
});

console.log(book);
