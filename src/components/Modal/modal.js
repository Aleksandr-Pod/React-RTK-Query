import { createPortal } from 'react-dom';
import { useEffect } from 'react';


const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onKeyPress, handleOverlayClick, children }) => {

  useEffect(() => {
    window.document.addEventListener('keydown', onKeyPress);
    return () => {
      window.document.removeEventListener('keydown', onKeyPress)
    }
  }, [onKeyPress])


    return createPortal(
        <div className="Overlay" onClick={handleOverlayClick}>
            <div className="Modal">
              {children}
            </div>
        </div>, modalRoot
    )
}