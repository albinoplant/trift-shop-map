import React from "react";

const WorkinghoursInputForm  = () => {
  return (
    <form>
      <label>
        godzinki
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Wyślij" />
    </form>
  );
};

export default WorkinghoursInputForm;
