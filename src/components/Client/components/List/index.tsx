import React from 'react';
import Table, { TableContainer, TableHeaderRow, TableHeaderCell, TableRow, TableCell } from '../../../../library/Table';
import ClientModel from '../../../../models/ClientModel';

interface Props {
  clients: ClientModel[]
}

const List: React.FC<Props> = ({ clients }) => {

  return (
    <TableContainer>
      <Table>
        <TableHeaderRow>
          <TableHeaderCell>Tipo</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Documento</TableHeaderCell>
        </TableHeaderRow>

        {
          clients.map((client, idx) => <TableRow key={idx}>
            <TableCell data-title='Tipo'>{client.type}</TableCell>
            <TableCell data-title='Nome'>{client.name}</TableCell>
            <TableCell data-title='Documento'>{client.document}</TableCell>
          </TableRow>
          )
        }

      </Table>
    </TableContainer>
  )
}

export default List;