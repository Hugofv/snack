import React from 'react';
import Table, { TableContainer, TableHeaderRow, TableHeaderCell, TableRow, TableCell } from '../../../../library/Table';

const List: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeaderRow>
          <TableHeaderCell>Tipo</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Documento</TableHeaderCell>
        </TableHeaderRow>

        <TableRow>
          <TableCell data-title='Nome'>Hugo</TableCell>
          <TableCell data-title='Nome'>Hugo</TableCell>
          <TableCell data-title='Nome'>Hugo</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  )
}

export default List;