// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   age: 30,
//   name: "Corentin Clichy",
//   hobbies: ["sports", "cookies"], // : string[]
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/// Possible to specifie de index and assign number, string with = after the key

enum AnotherRole {
  ADMIN = 5,
  READ_ONLY = "TEST",
  AUTHOR = 20,
}

const person = {
  age: 30,
  name: "Corentin Clichy",
  hobbies: ["sports", "cookies"], // : string[]
  role: Role.ADMIN,
};

// person.role.push("admin");
// // person.role[1] = 10;

// person.role = [10, "admin"];

// : any[] allow to be non specific on type inside the array

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// ATTENTION Important to use any carrefully. Any make the compiler don't check anything. IN THE MAJORITY OF CASE TRY TO AVOID ANY

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); => Error map only on arrays
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
