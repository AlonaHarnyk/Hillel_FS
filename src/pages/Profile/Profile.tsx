import { selectUser, useAuthStore } from "../../stores/authStore";

export const Profile = () => {
  const user = useAuthStore(selectUser);
  return <p>User: {user?.name}</p>;
};
