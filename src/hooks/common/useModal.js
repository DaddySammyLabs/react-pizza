// src/hooks/useModal.js

import { useState, useCallback, useEffect } from "react";
import { useEscapeKey } from "./useEscapeKey";

const useModal = (initialValue = false, closeOnEscape = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // useEscapeKey(closeOnEscape, close);
  useEscapeKey(isOpen && closeOnEscape, close);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useModal;
