import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import styles from './styles.module.css';

export default function ExternalLink({
  classNameLink,
  classNameOverlay,
  externalURL,
  messageBody,
  messageTitle,
  buttonOkTitle,
  buttonCancelTitle,
  children,
  onOpenHandler,
  onOkHandler,
  onCancelHandler,
  ...props
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const returnObj = { children: children, url: externalURL };
  const handleOpenModalClick = () => {
    setIsModalOpen(true);
    onOpenHandler && onOpenHandler(returnObj);
  };

  const handleOKClick = () => {
    onOkHandler && onOkHandler(returnObj);
    typeof window !== 'undefined' && window.open(externalURL);
    setIsModalOpen(false);
  };

  const handleCancelClick = () => {
    onCancelHandler && onCancelHandler(returnObj);
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <button
        {...props}
        className={`${styles.button} ${classNameLink}`}
        onClick={handleOpenModalClick}
      >
        {children}
      </button>
      {isModalOpen && (
        <Portal>
          <div
            className={`${styles.overlayBackground} ${classNameOverlay} ${styles.overlay}`}
          >
            <div className={`${styles.modal} modal-container`}>
              {messageTitle && (
                <div className='modal-title'>
                  <div dangerouslySetInnerHTML={{ __html: messageTitle }} />
                </div>
              )}
              <div className='modal-body'>
                <div dangerouslySetInnerHTML={{ __html: messageBody }} />
              </div>
              <div className='modal-actions'>
                <button onClick={handleOKClick}>{buttonOkTitle || 'Ok'}</button>
                <button onClick={handleCancelClick}>
                  {buttonCancelTitle || 'Cancel'}
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </Fragment>
  );
}

ExternalLink.propTypes = {
  externalURL: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
  messageTitle: PropTypes.string,
  buttonOkTitle: PropTypes.string,
  buttonCancelTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  onOpenHandler: PropTypes.func,
  onOkHandler: PropTypes.func,
  onCancelHandler: PropTypes.func,
  classNameLink: PropTypes.string,
  classNameOverlay: PropTypes.string
};
