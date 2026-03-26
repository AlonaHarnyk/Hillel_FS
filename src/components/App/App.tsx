import { useEffect } from "react";
import { UsersList } from "../UsersList/UsersList";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOperation } from "../../redux/users/usersOperations";
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/users/usersSelectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getUsersOperation());
  }, [dispatch]);

  // return <UsersList />;
  return (
    <>
      {isLoading && <h1>LOADING..</h1>}
      <UsersList />
      {isError && <p>Whoop's, it's error!</p>}
    </>
  );
};
