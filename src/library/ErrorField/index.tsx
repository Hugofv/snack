import React from 'react'
import styled from '@emotion/styled'

import { Box } from '../FlexBox'

export const FormError = styled.div`
  font-size: 11px;
  line-height: 18px;
  color: hsla(6, 66%, 47%, 1);
  text-transform: uppercase;
  font-weight: bold;
`

export default ({ errors, touched, fieldName }: any) => (
  <Box minHeight={18}>
    {errors[fieldName] && touched[fieldName] && <FormError>{errors[fieldName]}</FormError>}
  </Box>
)
