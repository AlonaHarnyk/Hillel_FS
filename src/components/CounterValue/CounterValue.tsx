interface Props {
    counter: number
}

export const CounterValue = ({ counter }: Props) => {

  return (
      <p>Counter value: {counter} </p>
  );
};
