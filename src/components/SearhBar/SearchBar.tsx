interface Props {
  onSearch: (search: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const handleSubmit = (formData: FormData) => {
    const search = formData.get("search") as string;
    onSearch(search);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="search" placeholder="Enter name"/> <button>Search</button>
    </form>
  );
};
