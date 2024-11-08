import React, { useState, useEffect } from 'react';
import { TabProps } from './Tab.types';
import './Tab.css';

const tabs = [
  { id: 1, label: 'Tab 1', endpoint: '/api/content1' },
  { id: 2, label: 'Tab 2', endpoint: '/api/content2' },
  { id: 3, label: 'Tab 3', endpoint: '/api/content3' },
];

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [content, setContent] = useState<TabProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      setContent(null);

      try {
        const response = await fetch(
          tabs.find((tab) => tab.id === activeTab)?.endpoint || '',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: TabProps = await response.json();
        setContent(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [activeTab]);

  return (
    <div className='tabbed-interface'>
      <div className='tabs'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className='content'>
        {loading && <p>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {content && (
          <div>
            <h2>{content.title}</h2>
            <p>{content.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
