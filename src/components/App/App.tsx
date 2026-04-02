import { useCallback, useMemo, useState } from "react";
import { UsersList } from "../UsersList/UsersList";
import { SearchBar } from "../SearhBar/SearchBar";
import { Child } from "../Child/Child";

export interface User {
  id: number;
  name: string;
  age: number;
}

const data = [
  {
    id: 1,
    name: "Olha",
    age: 20,
  },
  {
    id: 2,
    name: "Roman",
    age: 30,
  },
  {
    id: 3,
    name: "Iryna",
    age: 40,
  },
  {
    id: 4,
    name: "Ann",
    age: 50,
  },
  {
    id: 5,
    name: "Petro",
    age: 60,
  },
];

export const App = () => {
  const [users] = useState<User[]>(data);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const filteredUsers = useMemo(() => {
    console.log("memo");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, users]);

  // const filteredUsers = users.filter((user) =>
  //     user.name.toLowerCase().includes(search.toLowerCase()),
  //   );

  // const handleClick = () => {
  //   console.log('Test button is clicked!')
  // }

  const handleClick = useCallback(() => {
    console.log("Test button is clicked!");
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <UsersList users={filteredUsers} />
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Count: {count}</p>
      <Child onTestClick={handleClick} />
    </>
  );
};
