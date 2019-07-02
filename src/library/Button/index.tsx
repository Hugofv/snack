import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import ButtonRaw from '../ButtonRaw'

const Button = ({ children, loading, primary, small, ...rest }: any) => (
  <ButtonRaw {...rest}>
    <i>
      <svg height={16} viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'>
        <circle cx='50' cy='50' fill='none' stroke='currentColor' strokeWidth='10' r='35' strokeDasharray='164.93361431346415 56.97787143782138' transform='rotate(305.844 50 50)'>
          <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' />
        </circle>
      </svg>
    </i>
    <span style={{ display: 'inline-block', pointerEvents: 'none' }}>
      {children}
    </span>
  </ButtonRaw>
)

export default styled(Button)`
  border-radius: 22px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 32px;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  background: hsla(216, 40%, 55%, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  color: white;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  background-color: hsla(201, 100%, 96%, 1);
  ${props => props.small && css`
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    padding: 8px 24px;
  `}
  ${(props: any) => props.loading && css`
    background-color: hsla(203,  82%, 76%, 1);
    pointer-events: none;
  `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px hsla(202,  81%, 86%, 1);
    border: 1px solid hsla(205,  79%, 66%, 1);
  }
  & > i {
    display: inline-block;
    line-height: 0;
    pointer-events: none;

    vertical-align: -2px;
    opacity: 0;
    margin-left: -16px;
    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);

    ${props => props.loading && css`
      opacity: 1;
      margin-left: 0px;
      margin-right: 8px;
    `}
  }
`
