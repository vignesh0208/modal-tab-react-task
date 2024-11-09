import React from 'react';
import { TableProps } from './Table.types';
import './Table.css';

const Table = <T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length}>No data</td>
            </tr>
          )}
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
