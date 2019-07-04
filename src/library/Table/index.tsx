import { width, height, lineHeight } from 'styled-system'
import styled from '@emotion/styled'

export const TableContainer = styled.div`
  border: none;
  @media (min-width: 768px) {
    border: 1px solid hsla(202,  20%, 86%, 1);
  }
`

export const Table = styled.div`
  display: block;
  &:last-child {
    border-bottom: none;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: table;
    color: inherit;
  }
`

export const TableHeader = styled.div`
  display: block;
  @media (min-width: 768px) {
    font-weight: 600;
    color: inherit;
    background-color: hsla(207,  73%, 57%, 1);
  }
`

interface PropsTableRow {
  background?: string;
}

export const TableRow = styled.div<PropsTableRow>`
  display: block;
  border-bottom: 1px solid hsla(202,  20%, 86%, 1);
  padding-top: 16px;
  background-color: ${({ background }: PropsTableRow) => background};
  @media (min-width: 768px) {
    padding-top: 0;
    display: table-row;
    border-bottom: none;
    box-shadow: inset 0 -1px 0 0 hsla(202,  20%, 86%, 1);
    &:hover {
      background-color: hsla(201,  20%, 96%, 1);
    }
  }
`

export const TableHeaderRow = styled(TableRow)`
  border-bottom: none;
  @media (min-width: 768px) {
    font-weight: 500;
    color: inherit;
    background-color: hsla(201,  20%, 96%, 1);
  }
`

export const TableCell = styled.div`
  display: block;
  margin-bottom: 10px;
  line-height: 20px;
  @media (max-width: 767px) {
    &:before {
      margin-bottom: 3px;
      content: attr(data-title);
      min-width: 98px;
      font-size: 10px;
      line-height: 1;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      display: block;
    }
  }
  @media (min-width: 768px) {
    display: table-cell;
    vertical-align: middle;
    font-size: inherit;
    padding-right: 16px;
    padding-left: 16px;
    &:first-of-type {
      height: 40px;
    }
  }
  ${width}
  ${height}
  ${lineHeight}
`

export const TableHeaderCell = styled(TableCell)`
  margin-bottom: 0;
  @media (max-width: 767px) {
    display: none;
  }
`

export default Table