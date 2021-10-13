/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

import { ReactComponent as CloseSvg } from '../../../assets/icons/Close.svg';

import style from './Modal.module.css';

type Props = {
  show: boolean;
  onClose: () => void;
  title: string;
};

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const Modal: FC<Props> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    e.preventDefault();
    if (e.code === 'Enter' || e.code === 'Space') {
      onClose();
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <FocusTrap>
      <div className={style.modal} onClick={onClose}>
        <div
          role="dialog"
          className={style.content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.header}>
            <h4 className={style.title}>{title}</h4>
            <CloseSvg
              role="button"
              tabIndex={0}
              fillOpacity={0.5}
              onClick={onClose}
              onKeyPress={handleKeyPress}
              className={style.closeSvg}
            />
          </div>
          <div className={style.body}>{children}</div>
          <div className={style.footer}>
            <button onClick={onClose} type="button" className={style.button}>
              Done
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
