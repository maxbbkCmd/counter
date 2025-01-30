import { styled } from "styled-components";

type ButtonPropsType = {
  title: string;
  callBack: () => void
}

export const Button = ({title, callBack}: ButtonPropsType) => {
  return (
    <Button2 onClick={callBack}>{title}</Button2>
  );
};

const Button2 = styled.button`
  border-radius: 10px;
  padding: 15px;
  border: none;
  background-color: #63b3f8;
`