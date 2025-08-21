// Shallow Copy (cópia superficial); não pega os itens aninhados.

const htmlCourse = {
  course: "HTML",
  students: [{ name: "Douglas", email: "douglas@email.com" }]
};

// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript"
// };

// Vai modificar o htmlCourse também students é uma referência e não uma cópia.
// jsCourse.students.push({ name: "João", email: "joao@email.com" });

// Deep Copy (cópia profunda) pega os itens aninhados também.
// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript",
//   students: [
//     ...htmlCourse.students,
//     { name: "Maria", email: "maria@email.com" }
//   ]
// };

// jsCourse.students.push({ name: "João", email: "joao@email.com" });

const jsCourse = {
  ...htmlCourse,
  course: "Javascript"
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "João", email: "joao@email.com" }
];
