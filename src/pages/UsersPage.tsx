import { useSelector } from "react-redux";
import { selectUsers } from "../redux/users/usersSelectors";
import { deleteUser } from "../redux/users/usersSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

export const UsersPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <ul>
      {users.map(({ id, name, age }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
