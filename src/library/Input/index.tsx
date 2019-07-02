import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { width, height } from 'styled-system'

export default styled.input`
  -webkit-appearance: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.2;
  padding: 7px 10px;
  width: 100%;
  transition: all 0.3s;
  ${width}
  ${height}
  border-radius: 3px;
  border: 1px solid hsla(203,  20%, 76%, 1);
  background-color: white;
  ::placeholder {
    color: hsla(203,  20%, 76%, 1);
  }
  ${(props: any) => props.withError && css`
    border-color: hsla(6, 66%, 47%, 1);
  `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px hsla(202,  81%, 86%, 1);
    border: 1px solid hsla(205,  79%, 66%, 1);
  }
	&:disabled {
		background-color: hsla(201,  20%, 96%, 1);
		border: 1px solid hsla(202,  20%, 86%, 1);
		cursor: not-allowed;
	}
`
