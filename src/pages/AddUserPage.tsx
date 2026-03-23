import { useNavigate } from "react-router";
import type { AppDispatch } from "../redux/store";
import { addUser } from "../redux/users/usersSlice";
import { useDispatch } from "react-redux";

export const AdduserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const age = formData.get("age") as string;

    const user = {
      name,
      age: Number(age),
      id: Date.now(),
    };

    dispatch(addUser(user));
    navigate("/");
  };

  return (
    <form action={handleSubmit}>
      <label>
        Name: <input type="text" name="name" />
      </label>
      <label>
        Age: <input type="number" name="age" />
      </label>
      <button>Add user</button>
    </form>
  );
};
