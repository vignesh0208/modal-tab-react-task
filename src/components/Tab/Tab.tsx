import React, { useState, useEffect } from 'react';
import { TabProps } from './Tab.types';
import { TableProps } from '../Table/Table.types';
import Table from '../Table/Table';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Tab.css';

const tabs = [
  {
    id: 1,
    label: 'Todos',
    endpoint: 'https://jsonplaceholder.typicode.com/todos',
  },
  {
    id: 2,
    label: 'Post',
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
  },
  { id: 3, label: 'Loader', endpoint: '' },
];

const Tab: React.FC = () => {
  const [columns, setColumns] = useState<TableProps<any>['columns']>([]);
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [content, setContent] = useState<TabProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      setContent(null);
      if (activeTab === 1) {
        setColumns([
          { header: 'ID', accessor: 'id' },
          { header: 'Title', accessor: 'title' },
        ]);
      } else if (activeTab === 2) {
        setColumns([
          { header: 'ID', accessor: 'id' },
          { header: 'Title', accessor: 'title' },
          { header: 'Body', accessor: 'body' },
        ]);
      }

      try {
        const response = await fetch(
          tabs.find((tab) => tab.id === activeTab)?.endpoint || '',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: TabProps[] = await response.json();
        setContent(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === 3) {
      setLoading(true);
      return;
    }
    fetchContent();
  }, [activeTab]);

  return (
    <>
      <div className='tabs'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </div>
        ))}
      </div>

      <div className='tab-container'>
        {loading && <LoadingSpinner />}
        {error && <p className='error'>{error}</p>}
        {content && (
          <div className='tab-content'>
            <Table
              data={content || null}
              columns={columns}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Tab;
