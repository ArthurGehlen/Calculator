import { useState, useEffect, use } from "react";
import "./App.css";

class Operators {
  constructor(firstNum, lastNum) {
    this.firstNum = firstNum;
    this.lastNum = lastNum;
  }

  sum() {
    return this.firstNum + this.lastNum;
  }

  subtract() {
    return this.firstNum - this.lastNum;
  }

  multiply() {
    return this.firstNum * this.lastNum;
  }

  divide() {
    return this.firstNum / this.lastNum;
  }
}

const operators = ["+", "-", "x", "/"];

function App() {
  const [currentThemePhase, setCurrentThemePhase] = useState(1);
  const [currentCalc, setCurrentCalc] = useState([0]);
  const [commaCount, setCommaCount] = useState(0);
  const [formattedCalc, setFormattedCalc] = useState(0);
  const [operation, setOperation] = useState("");

  {
    /* prvavelmente tem uma forma mais inteligente q isso, mas fds, eu sou um genio :) */
  }
  const change_theme_phase = () => {
    if (currentThemePhase == 3) return setCurrentThemePhase(1);

    return setCurrentThemePhase(currentThemePhase + 1);
  };

  {
    /*
      LEMBRAR DE NÃO DEIXAR CONSOLE.LOG() ESPALHADO NO CÓDGIGO :)
    */
  }

  const add_nums_into_screen = (e) => {
    if (e.target.name == ",") setCommaCount(1);
    if (commaCount >= 1 && e.target.name == ",") return;

    setCurrentCalc((prevNums) => [...prevNums, e.target.name]);
  };

  const handle_reset = () => {
    setCommaCount(0);
    setOperation("");
    setCurrentCalc([]);
  };

  const set_operator = (e) => {
    const operator = e.target.name;

    const lastChar =
      currentCalc[currentCalc.length - 1]; /* me rendi ao camelCase */

    /* isso é arte */
    if (operators.includes(lastChar)) {
      setCurrentCalc((prev) => [...prev.slice(0, -1), operator]);
      return;
    }

    setCurrentCalc((prev) => [...prev, operator]);
  };

  useEffect(() => {
    document.body.classList = `theme_${currentThemePhase}`;
  }, [currentThemePhase]);

  return (
    <>
      <main>
        <header>
          <h2>calc</h2>

          <div className="theme_wrapper">
            <p>Theme</p>
            {/*(MUDAR ISSO PRA UM OUTRO COMPONENTE - theme_btn)*/}
            <div className="theme_container">
              <div className="theme_markers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <button
                className={`phase_${currentThemePhase}`}
                onClick={change_theme_phase}
              ></button>
            </div>
          </div>
        </header>

        <input
          type="text"
          value={currentCalc.join("")}
          className="screen"
          readOnly
        />

        <div className="keypad_wrapper">
          <button className="key" onClick={add_nums_into_screen} name="7">
            7
          </button>
          <button className="key" onClick={add_nums_into_screen} name="8">
            8
          </button>
          <button className="key" onClick={add_nums_into_screen} name="9">
            9
          </button>
          <button
            className="key delete_btn"
            onClick={() => setCurrentCalc((prev) => prev.slice(0, -1))}
          >
            DEL
          </button>
          <button className="key" onClick={add_nums_into_screen} name="4">
            4
          </button>
          <button className="key" onClick={add_nums_into_screen} name="5">
            5
          </button>
          <button className="key" onClick={add_nums_into_screen} name="6">
            6
          </button>
          <button className="key" name="+" onClick={set_operator}>
            +
          </button>
          <button className="key" onClick={add_nums_into_screen} name="1">
            1
          </button>
          <button className="key" onClick={add_nums_into_screen} name="2">
            2
          </button>
          <button className="key" onClick={add_nums_into_screen} name="3">
            3
          </button>
          <button className="key" name="-" onClick={set_operator}>
            -
          </button>
          <button className="key" onClick={add_nums_into_screen} name=",">
            .
          </button>
          <button className="key" onClick={add_nums_into_screen} name="0">
            0
          </button>
          <button className="key" name="/" onClick={set_operator}>
            /
          </button>
          <button className="key" name="x" onClick={set_operator}>
            x
          </button>
          <button className="reset_btn" onClick={handle_reset}>
            RESET
          </button>
          <button className="equals_btn" onClick={calculate}>
            =
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
