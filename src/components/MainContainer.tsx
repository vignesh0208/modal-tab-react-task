import React, { useState } from 'react';
import Modal from './Modal/Modal';
import Tab from './Tab/Tab';
// import './MainContainer.css';

const MainContainer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='main-container'>
      <button
        onClick={openModal}
        className='open-modal-btn'>
        Open Modal
      </button>
      <Tab />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title='Example Modal'
        onConfirm={closeModal}>
        <p>This is a modal triggered from the main container.</p>
      </Modal>
    </div>
  );
};

export default MainContainer;
