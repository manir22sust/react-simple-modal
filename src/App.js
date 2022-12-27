import { useState } from "react";

import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="modalBtn" onClick={() => setModal(!modal)}>
        Modal
      </button>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
