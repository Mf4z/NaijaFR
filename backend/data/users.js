import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Random User",
    email: "random@email.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: false,
  },
  {
    name: "Another User",
    email: "another@email.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: false,
  },
];

export default users;
