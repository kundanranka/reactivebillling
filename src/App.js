import React from "react";
import DetailsForm from "./DetailsForm";

function App() {
  const [formData, setForm ] = React.useState([]);
  function submitForm(data) {
    setForm(data);
  }
  return (
      <section class="contact-clean">
        <DetailsForm submitForm={submitForm}  formData={formData} />
      </section>
  );
}

export default App;
