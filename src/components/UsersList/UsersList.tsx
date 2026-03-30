import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelectors";
import { deleteUserOperation } from "../../redux/users/usersOperations";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import type { User } from "../../types/users";

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: User["id"]) => {
    dispatch(deleteUserOperation(id));
  };

  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li>
              <h2> {user.name}</h2>
              <p> {user.email}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
