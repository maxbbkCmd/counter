import { styled } from "styled-components";
import { Button } from "./Button";

type CounterPropsType = {
  counter: number;
  incCounter: () => void;
  resetCounter: () => void;
}

export const Counter = ({counter, incCounter, resetCounter}: CounterPropsType) => {
  return (
    <CounterStyled>
      <InputWrapper>
        <Input type='number' value={counter} disabled/>
      </InputWrapper>

      <ButtonWrapper>
        <Button title={"inc"} callBack={incCounter}/>
        <Button title={"reset"} callBack={resetCounter}/>
      </ButtonWrapper>
    </CounterStyled>
  );
};

const CounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 4px solid #63b3f8;
  padding: 20px;
  border-radius: 15px;
  gap: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #63b3f8;
  border-radius: 15px;
  height: 200px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 4px solid #63b3f8;
  border-radius: 15px;
  padding: 30px 0 30px;
  gap: 30px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 80px;
  text-align: center;
  width: 100%;
  color: white;

  /* Стили для числового ввода */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-input-placeholder {
    color: #84c862; /* Цвет плейсхолдера */
  }
`;
