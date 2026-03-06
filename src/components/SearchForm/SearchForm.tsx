import { type DebouncedState } from 'use-debounce';


interface Props {
    defaultValue: string, 
    onSearch: DebouncedState<React.Dispatch<React.SetStateAction<string>>>
}

export const SearchForm = ({defaultValue, onSearch}: Props) => {
  return (
    <div>
      <input
        defaultValue={defaultValue}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}