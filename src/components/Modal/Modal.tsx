import { useEffect, type ReactNode } from "react";
import css from "./Modal.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: Props) => {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);


    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose]);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeBtn}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
