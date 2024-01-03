class Person {
  constructor(name, place, qualification, college, status, native) {
    this.name = name;
    this.place = place;
    this.qualification = qualification;
    this.college = college;
    this.status = status;
    this.native = native;
  }
}

let person1 = new Person(
  "Kamaleshwaran",
  "Chennai",
  "B.E Mechanical Engineering",
  "R.M.K Engineering College",
  "Studying",
  "Thiruchy"
);

console.table(person1);
