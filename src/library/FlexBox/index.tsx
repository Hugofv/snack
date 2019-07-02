import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { style, space, color, border, borderRadius, width, height, opacity, fontFamily, fontSize, fontWeight, flex, order, alignSelf, textAlign, lineHeight, top, right, bottom, left, maxWidth, maxHeight, minWidth, minHeight, position, overflow, justifyContent, alignItems, flexDirection, flexWrap, zIndex, boxShadow } from 'styled-system'

const lh = style({ prop: 'lh', cssProperty: 'lineHeight' })
const ta = style({ prop: 'ta', cssProperty: 'textAlign' })
const t = style({ prop: 't', cssProperty: 'top', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const r = style({ prop: 'r', cssProperty: 'right', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const b = style({ prop: 'b', cssProperty: 'bottom', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const l = style({ prop: 'l', cssProperty: 'left', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const w = style({ prop: 'w', cssProperty: 'width', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const h = style({ prop: 'h', cssProperty: 'height', transformValue: (n: string) => /^\d+$/.test(n) ? n + 'px' : n })
const cursor = style({ prop: 'cursor', cssProperty: 'cursor' })
const display = style({ prop: 'display', alias: 'd' })

export const Box = styled('div')<any>(
  {
    boxSizing: 'border-box'
  },
  display,
  space,
  color,
  border,
  borderRadius,
  width,
  height,
  opacity,
  fontFamily,
  fontSize,
  fontWeight,
  flex,
  order,
  alignSelf,
  textAlign,
  ta,
  lineHeight,
  lh,
  top, right, bottom, left,
  t, r, b, l,
  maxWidth, maxHeight, minWidth, minHeight,
  w, h,
  cursor,
  position,
  overflow,
  zIndex,
  boxShadow,
  (props: any) => props.full && css`position: fixed; top: 0; bottom: 0; right: 0; left: 0;`,
  (props: any) => props.bgColor && css`background-color: ${props.theme.colors[props.bgColor]};`,
  (props: any) => props.css
)

Box.displayName = 'Box'

const jc = style({ prop: 'jc', cssProperty: 'justifyContent' })
const ai = style({ prop: 'ai', cssProperty: 'alignItems' })
const fd = style({ prop: 'fd', cssProperty: 'flexDirection' })
const fw = style({ prop: 'fw', cssProperty: 'flexWrap' })

export const Flex = styled(Box)(
  { display: 'flex' },
  display,
  justifyContent, alignItems, flexDirection, flexWrap,
  jc, ai, fd, fw,
  (props: any) => props.css
)

Flex.displayName = 'Flex'
