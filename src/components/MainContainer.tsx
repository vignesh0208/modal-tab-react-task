import React, { useState, useEffect } from 'react';
import Table from './Table/Table';
import { TableProps } from './Table/Table.types';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Tab from './Tab/Tab';

const MainContainer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenTable, setModalOpenTable] = useState(false);
  const [columns, setColumns] = useState<TableProps<any>['columns']>([]);
  const [content, setContent] = useState<TableProps<any>['data']>([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openModalTable = () => setModalOpenTable(true);
  const closeModalTable = () => setModalOpenTable(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setContent(data);
        setColumns([
          { header: 'ID', accessor: 'id' },
          { header: 'Title', accessor: 'title' },
          { header: 'Body', accessor: 'body' },
        ]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className='main-container'>
      <div className='container-header'>
        <h1>Section Name</h1>
        <div>
          <Button
            onClick={openModal}
            className='open-modal-btn'
            extraStyles={{ marginRight: '8px' }}>
            Open Modal
          </Button>
          <Button
            onClick={openModalTable}
            className='open-modal-btn'>
            Open Modal Table
          </Button>
        </div>
      </div>

      <Tab />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title='Example Modal'
        onConfirm={closeModal}>
        <p>This is a modal triggered from the main container.</p>
      </Modal>
      <Modal
        isOpen={isModalOpenTable}
        onClose={closeModalTable}
        title='Example Modal'
        onConfirm={closeModalTable}
        width='80vw'>
        <Table
          data={content || null}
          columns={columns}
        />
      </Modal>
    </div>
  );
};

export default MainContainer;
