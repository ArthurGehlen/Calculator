import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentThemePhase, setCurrentThemePhase] = useState(1);
  const [currentCalc, setCurrentCalc] = useState([]);
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

  const add_nums_into_screen = (e) => {
    if (e.target.name == ",") setCommaCount(commaCount + 1);
    if (commaCount >= 1 && e.target.name == ",") return;

    setCurrentCalc((prevNums) => [...prevNums, e.target.name]);
  };

  const reset_action = () => {
    setCommaCount(0);
    setCurrentCalc([]);
  };

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
          <button className="key delete_btn">DEL</button>
          <button className="key" onClick={add_nums_into_screen} name="4">
            4
          </button>
          <button className="key" onClick={add_nums_into_screen} name="5">
            5
          </button>
          <button className="key" onClick={add_nums_into_screen} name="6">
            6
          </button>
          <button className="key">+</button>
          <button className="key" onClick={add_nums_into_screen} name="1">
            1
          </button>
          <button className="key" onClick={add_nums_into_screen} name="2">
            2
          </button>
          <button className="key" onClick={add_nums_into_screen} name="3">
            3
          </button>
          <button className="key">-</button>
          <button className="key" onClick={add_nums_into_screen} name=",">
            .
          </button>
          <button className="key" onClick={add_nums_into_screen} name="0">
            0
          </button>
          <button className="key">/</button>
          <button className="key">x</button>
          <button className="reset_btn" onClick={reset_action}>
            RESET
          </button>
          <button className="equals_btn">=</button>
        </div>
      </main>
    </>
  );
}

export default App;
