import { useState } from "react";
import iconDollar from "./assets/images/icon-dollar.svg";
import iconPerson from "./assets/images/icon-person.svg";

function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(15);

  function handleButtonClick(value: number): void {
    setPercent(value);
  }

  function handleReset(): void {
    setNumberOfPeople(0);
    setBill(0);
    setPercent(15);
  }

  const tip: number = (bill * percent) / (100 * numberOfPeople);
  const total: number = (bill * (1 + percent / 100)) / numberOfPeople;

  return (
    <main>
      <section className="title">
        <h1>spli</h1>
        <h1>tter</h1>
      </section>
      <form>
        <section className="input-section">
          <div className="input-field">
            <label htmlFor="bill">Bill</label>
            <div className="input-box">
              <img src={iconDollar} alt="" />
              <input
                type="number"
                name="bill"
                placeholder="0.0"
                value={bill <= 0 ? "" : bill}
                onChange={(e) => {
                  const newBill = e.target.value;
                  parseFloat(newBill) > 0
                    ? setBill(parseFloat(newBill))
                    : setBill(0);
                }}
              />
            </div>
          </div>
          <div className="btn-section">
            <label htmlFor="tip">Select Tip %</label>
            <div className="btn-grid">
              <button
                className="btn-tip"
                type="button"
                onClick={() => handleButtonClick(5)}
              >
                5%
              </button>
              <button
                className="btn-tip"
                type="button"
                onClick={() => handleButtonClick(10)}
              >
                10%
              </button>
              <button
                className="btn-tip"
                type="button"
                onClick={() => handleButtonClick(15)}
              >
                15%
              </button>
              <button
                className="btn-tip"
                type="button"
                onClick={() => handleButtonClick(25)}
              >
                25%
              </button>
              <button
                className="btn-tip"
                type="button"
                onClick={() => handleButtonClick(50)}
              >
                50%
              </button>
              <input
                type="number"
                name="custom-tip"
                placeholder="Custom"
                className="custom-tip"
                onChange={(e) => {
                  const newPercent = e.target.value;
                  parseFloat(newPercent) > 0
                    ? setPercent(parseFloat(newPercent))
                    : setPercent(0);
                }}
              />
            </div>
          </div>

          <div className="input-field">
            <div className="flex-between">
              <label htmlFor="people">Number of People</label>
              <span className={numberOfPeople == 0 ? "error show" : "error"}>
                Can not be zero
              </span>
            </div>

            <div
              className={numberOfPeople == 0 ? "input-box-error" : "input-box"}
            >
              <img src={iconPerson} alt="" />
              <input
                type="number"
                name="people"
                placeholder="1"
                value={numberOfPeople}
                onChange={(e) => {
                  const newValue = e.target.value;
                  parseInt(newValue) >= 1
                    ? setNumberOfPeople(parseInt(newValue))
                    : setNumberOfPeople(0);
                }}
              />
            </div>
          </div>
        </section>

        <section className="result-section">
          <section className="flex-between">
            <div className="grid-two-rows">
              <span className="tip-title">Tip Amount</span>
              <span>/ person</span>
            </div>
            <span className="tip">
              {numberOfPeople == 0 ? "Error" : tip.toFixed(2)}
            </span>
          </section>
          <section className="flex-between">
            <div className="grid-two-rows">
              <span className="tip-title">Total</span>
              <span>/ person</span>
            </div>
            <span className="tip">
              {numberOfPeople == 0 ? "Error" : total.toFixed(2)}
            </span>
          </section>
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </section>
      </form>
    </main>
  );
}

export default App;
