import { useEffect } from "react";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return <h1>Such page does not exist!</h1>;
};
