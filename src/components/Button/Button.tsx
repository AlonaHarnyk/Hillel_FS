interface Props {
  textContent: string;
  onClickHandler: () => void;
  type: "submit" | "reset" | "button"
}
export const Button = ({textContent, onClickHandler, type}: Props) => {
  return <button onClick={onClickHandler} type={type}>{textContent}</button>;
};
