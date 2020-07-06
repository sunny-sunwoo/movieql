export const people = [
  {
    id: "0",
    name: "sunny",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "shong",
    age: 18,
    gender: "male"
  },
  {
    id: "2",
    name: "hyelee",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}