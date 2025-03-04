import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar">
          <h1> World&apos;s Information</h1>
        </nav>
        <div className="container"></div>
        <div className="countries">
          <Countries></Countries>
        </div>
        <div className="footer">
          <footer>
          <div className="priority">
            <div className="logox">
              <h1>World Tour</h1>
            </div>
            <p>
              Embark on a journey of a lifetime and explore breathtaking
              destinations with our curated tours. <br></br>
              Immerse yourself in diverse cultures, and create lasting memories
            </p>

            <div className="sos">
              <ul className="nax">
                <li>
                  <i className="fa fa-twitter"></i>
                </li>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-github"></i>
                </li>
              </ul>
            </div>
            <hr className="panthom"></hr>
            <div className="msg">
              <p>2017, All Rights Reserved.</p>
              <p>Front-End sample designed by Nahin</p>
            </div>
          </div>
          </footer>

        </div>
      </div>
    </>
  );
}

export default App;
