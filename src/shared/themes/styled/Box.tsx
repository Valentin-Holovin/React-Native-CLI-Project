import React from 'react';
import { View, FlexAlignType } from 'react-native';

export interface BoxProps {
  children: React.ReactNode;
  ac?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  ai?: FlexAlignType | undefined;
  as?: 'auto' | FlexAlignType | undefined;
  bw?: number | undefined;
  f?: number | undefined;
  fd?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  fw?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  h?: number | string | undefined;
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  mg?: number | string | undefined;
  mgb?: number | string | undefined;
  mgh?: number | string | undefined;
  mgl?: number | string | undefined;
  mgr?: number | string | undefined;
  mgt?: number | string | undefined;
  mgv?: number | string | undefined;
  maxH?: number | string | undefined;
  maxW?: number | string | undefined;
  minH?: number | string | undefined;
  minW?: number | string | undefined;
  p?: number | string | undefined;
  pb?: number | string | undefined;
  ph?: number | string | undefined;
  pl?: number | string | undefined;
  pt?: number | string | undefined;
  pv?: number | string | undefined;
  w?: number | string | undefined;
}

export const Box = ({
  children,
  ac = 'flex-start',
  ai = 'stretch',
  as = 'auto',
  bw = undefined,
  f = undefined,
  fd = 'column',
  fw = undefined,
  h = undefined,
  jc = 'flex-start',
  mg = undefined,
  mgb = undefined,
  mgh = undefined,
  mgl = undefined,
  mgr = undefined,
  mgt = undefined,
  mgv = undefined,
  maxH = undefined,
  maxW = undefined,
  minH = undefined,
  minW = undefined,
  p = undefined,
  pb = undefined,
  ph = undefined,
  pl = undefined,
  pt = undefined,
  pv = undefined,
  w = undefined,
}:BoxProps) => (
  <View style={{
    alignContent: ac,
    alignItems: ai,
    alignSelf: as,
    borderWidth: bw,
    flex: f,
    flexDirection: fd,
    flexWrap: fw,
    height: h,
    justifyContent: jc,
    margin: mg,
    marginBottom: mgb,
    marginHorizontal: mgh,
    marginLeft: mgl,
    marginRight: mgr,
    marginTop: mgt,
    marginVertical: mgv,
    maxHeight: maxH,
    maxWidth: maxW,
    minHeight: minH,
    minWidth: minW,
    padding: p,
    paddingBottom: pb,
    paddingHorizontal: ph,
    paddingLeft: pl,
    paddingTop: pt,
    paddingVertical: pv,
    width: w,
  }}
  >
    {children}
  </View>
);
