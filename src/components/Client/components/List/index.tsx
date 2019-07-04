import React from 'react';
import Table, { TableContainer, TableHeaderRow, TableHeaderCell, TableRow, TableCell } from '../../../../library/Table';
import ClientModel from '../../../../models/ClientModel';
import formatCnpj from '../../../../utils/formatCnpj';
import formatCpf from '../../../../utils/formatCpf';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { Action } from 'redux';

/**
 * Props do component.
 */
interface Props {
  readonly deleteClient: (id: string) => Action;
  clients: ClientModel[]
}

/**
 * Component List.
 */
const List: React.FC<Props> = ({ clients, deleteClient }) => {

  /**
   * Método responsável por excluir cliente.
   * 
   * @param client 
   */
  const deleteItem = (client: ClientModel) => {
    Swal.fire({
      title: 'Tem certeza que deseja excluir o cliente?',
      text: client.name,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(() => {
      deleteClient(client.id || '')
    })
  }

  return (
    <TableContainer>
      <Table>
        <TableHeaderRow>
          <TableHeaderCell>Tipo</TableHeaderCell>
          <TableHeaderCell>Nome</TableHeaderCell>
          <TableHeaderCell>Documento</TableHeaderCell>
          <TableHeaderCell>Ações</TableHeaderCell>
        </TableHeaderRow>

        {
          clients.map((client, idx) => <TableRow key={idx} background={client.type === 'business' ? '#ff6a00' : '#00b2ff'}>
            <TableCell data-title='Tipo'>{client.type}</TableCell>
            <TableCell data-title='Nome'>{client.name}</TableCell>
            <TableCell data-title='Documento'>{client.type === 'business' ? formatCnpj(client.document) : formatCpf(client.document)}</TableCell>
            <TableCell data-title='Nome'><FaTrash style={{ cursor: 'pointer' }} onClick={() => deleteItem(client)} /></TableCell>
          </TableRow>
          )
        }

      </Table>
    </TableContainer>
  )
}

export default List;