import type { AuthData } from "../../types/auth";

interface AuthFormProps {
  onSubmit: (authData: AuthData) => void;
}

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    onSubmit({ email, password });
  };

  return (
    <form action={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button>Submit</button>
    </form>
  );
};
