import type { User } from "../App/App";
import { memo } from "react";

interface Props {
  users: User[];
}

export const UsersList = memo(({ users }: Props) => {
//   console.log("user list");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </li>
      ))}
    </ul>
  );
});
