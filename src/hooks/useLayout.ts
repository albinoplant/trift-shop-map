import React from "react";

const useLayout = () => {
  const [open, setOpen] = React.useState(true);
  const toggleOpen = () => { 
    setOpen(!open)
  }
  return [open, toggleOpen];
};

export default useLayout;
