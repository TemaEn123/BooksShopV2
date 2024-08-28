import React, { createContext, useContext, useState } from "react";

interface IModalContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

const ModalContext = createContext<IModalContext | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("error context");

  return context;
};

export const ModalProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
