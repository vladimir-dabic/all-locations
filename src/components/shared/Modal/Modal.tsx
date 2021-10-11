/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CloseSvg } from '../../../assets/Close.svg';

import style from './Modal.module.css';

type Props = {
  show: boolean;
  onClose: () => void;
  title: string;
};

const Modal: FC<Props> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
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
    // <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
    <div className={cx(style.modal, { [style.show]: show })} onClick={onClose}>
      <div
        role="dialog"
        className={style.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.header}>
          <h4 className={style.title}>{title}</h4>
          <CloseSvg
            fillOpacity={0.5}
            onClick={onClose}
            className={style.closeSvg}
          />
        </div>
        <div className={style.body}>{children}</div>
        <div className={style.footer}>
          <button onClick={onClose} type="button" className={style.button}>
            Close
          </button>
        </div>
      </div>
    </div>,
    // {/* </CSSTransition>, */}
    document.getElementById('root') as Element,
  );
};

export default Modal;
