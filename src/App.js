import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Screen from './components/Screen/Screen';
import ButtonBox from './components/ButtonBox/ButtonBox';
import Button from './components/Button/Button';

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {btnValues.flat().map((btn, id) => {
          return (
            <Button
              key={id}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log("Button clicked!" , btn);
              }}
            />
          )
        })}

      </ButtonBox>
    </Wrapper>
  );
}

export default App;
