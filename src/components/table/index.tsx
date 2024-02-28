import styled from 'styled-components';
import { CommonProps } from '@/interfaces';
import { Component } from '@/components';
import React from 'react';
import { ArchiveBox, PencilSquare } from '@/icons';
import { DataTableProps } from '@/interfaces/table';

interface TableProps extends CommonProps {
  data: DataTableProps
  onClickDelete?: (item: any) => void
  onClickEdit?: (item: any) => void
}

const TableGroup = ({ data, onClickDelete, onClickEdit, ...props }: TableProps) => (
  <Component component='table' {...props}>
    <thead data-testid='thead'>
      <tr>
        {Object.values(data.thead).map((head: typeof data.thead, index: number) => (
          <td key={index}>{head}</td>
        ))}
        {(onClickDelete || onClickEdit) && (
          <td>Actions</td>
        )}
      </tr>
    </thead>
    <tbody data-testid='tbody'>
      {data.tbody.map((row: typeof data.tbody, index: number) => (
        <tr key={index}>
          {Object.values(row).map((value: typeof row, index: number) => (
            <td key={index}>{value}</td>
          ))}
          <td className='td-action'>
            {onClickEdit && (
              <button data-testid="btn-edit" onClick={() => onClickEdit(row)}>
                <PencilSquare width={20} />
              </button>
            )}
            {onClickDelete && (
              <button data-testid="btn-delete" onClick={() => onClickDelete(row)}>
                <ArchiveBox width={20} />
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </Component>
)

export const Table = styled(TableGroup)(({ css }: TableProps) => ({
  width: '100%',
  textAlign: 'center',
  'td.td-action': {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    'button': {
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
      '&:hover': {
        color: '#888888',
      }
    },
  },
  'thead': {
    boxShadow: '1px 1px 5px #888888',
  },
  ...css
}));
