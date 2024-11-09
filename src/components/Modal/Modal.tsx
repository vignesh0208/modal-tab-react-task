import React, { useEffect, FC } from 'react';
import Button from '../Button/Button';
import { ModalProps } from './Modal.types';
import './Modal.css';

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  width = '400px',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      className='modal-overlay'
      onClick={handleOverlayClick}>
      <div
        className='modal-content'
        style={{ width }}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'>
        <div className='modal-header'>
          <h2
            id='modal-title'
            className='modal-title'>
            {title}
          </h2>
          <Button
            className='modal-close'
            extraStyles={{ padding: '0' }}
            onClick={onClose}
            aria-label='Close modal'>
            &times;
          </Button>
        </div>
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'>
          <Button
            className='modal-btn-close'
            onClick={onClose}>
            Close
          </Button>
          <Button
            className='modal-btn-ok'
            onClick={onConfirm}>
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
