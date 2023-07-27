function App() {
  return (
    <main>
      <section className="title">
        <span>spli</span>
        <span>tter</span>
      </section>
      <form>
        <div className="input-section">
          <label htmlFor="bill">Bill</label>
          <input type="number" name="bill" placeholder="0.0" />
        </div>
        <div className="btn-section">
          <label htmlFor="tip">Select Tip %</label>
          <div className="btn-grid">
            <button className="btn-tip">5%</button>
            <button className="btn-tip">10%</button>
            <button className="btn-tip">15%</button>
            <button className="btn-tip">25%</button>
            <button className="btn-tip">50%</button>

            <input type="number" name="custom-tip" placeholder="Custom" />
          </div>
        </div>

        <div className="input-section">
          <label htmlFor="people">Number of People</label>
          <input type="number" name="people" placeholder="1" />
        </div>

        <section className="result-section">
          <section className="flex-between">
            <div className="grid-two-rows">
              <span className="tip-title">Tip Amount</span>
              <span>/ person</span>
            </div>
            <span className="tip">XXX</span>
          </section>
          <section className="flex-between">
            <div className="grid-two-rows">
              <span className="tip-title">Total</span>
              <span>/ person</span>
            </div>
            <span className="tip">XXX</span>
          </section>
          <button className="btn-reset">Reset</button>
        </section>
      </form>
    </main>
  );
}

export default App;
