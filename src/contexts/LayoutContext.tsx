import { createContext, useState, FC } from "react";

interface ILayoutContext {
  isOpen: boolean;
  setIsOpen: Function;
}

const LayoutContext = createContext(
  {} as ILayoutContext
);

export const LayoutProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(true);
  const values:ILayoutContext = {
    isOpen:open,
    setIsOpen:setOpen
  }
  return <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
