import React from "react";

const PriceInputForm = () => {
  return (
    <form>
      <label>
        <span>mon</span>
        <input type="text" name="mon" />
      </label>
      <label>
      <span>tue</span>
        <input type="text" name="tue" />
      </label>
      <label>
      <span>wen</span>
        <input type="text" name="wen" />
      </label>
      <label>
      <span>thu</span>
        <input type="text" name="thu" />
      </label>
      <label>
      <span>fri</span>
        <input type="text" name="fri" />
      </label>
      <label>
      <span>sat</span>
        <input type="text" name="sat" />
      </label>
      <label>
      <span>sun</span>
        <input type="text" name="sun" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PriceInputForm;
