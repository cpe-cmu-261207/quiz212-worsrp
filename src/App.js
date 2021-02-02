import { useState } from "react";
import PersonList from "./components/PersonList";
function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  const personNames = persons.map((person) => {
    return person.name;
  });

  const personGenders = persons.map((person) => {
    return person.gender;
  });

  const personAges = persons.map((person) => {
    return person.age;
  });

  const [id, setID] = useState(620610815);

  const minusClick = () => {
    setID(id.valueOf() - 1);
  };

  const plusClick = () => {
    setID(id.valueOf() + 1);
  };
  const resetClick = () => {
    setID(620610815);
  };
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{id}</p>
        <button onClick={minusClick}>-</button>
        <button onClick={resetClick}>reset</button>
        <button onClick={plusClick}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <PersonList name={"Sirapop Para"} gender={"male"} age={20} />
      <PersonList
        name={personNames[0]}
        gender={personGenders[0]}
        age={personAges[0]}
      />
      <PersonList
        name={personNames[1]}
        gender={personGenders[1]}
        age={personAges[1]}
      />
    </div>
  );
}

export default App;
