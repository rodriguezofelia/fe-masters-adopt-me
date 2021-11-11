import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // when you're created append to dom
    modalRoot.appendChild(elRef.current);
    // when you're done remove me from dom
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
