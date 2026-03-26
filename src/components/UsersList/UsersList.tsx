import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/usersSelectors";

export const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li>
              <h2> {user.name}</h2>
              <p> {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
