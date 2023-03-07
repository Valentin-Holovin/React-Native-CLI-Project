import styled from 'styled-components/native';
import { Colors } from './Colors';
import { FontFamily } from './Fonts';
import { constructBgc, constructSizing, StyledProps } from './StyledConstructors';
import { Spaces } from './Spaces';

export const shadow = `
  shadow-color: ${Colors.gray700};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.20;
  elevation: 5;
`;

export const Text = styled.Text<StyledProps>`
  font-family: ${({ ff }) => ff || FontFamily.OpenSans};
  font-size: ${({ fs }) => `${fs || Spaces.md}px`};
  color: ${({ color }) => color || Colors.textDark};
  text-align: ${({ ta }) => ta || 'left'};
  text-transform: ${({ ttf }) => ttf || 'none'};
  text-decoration: ${({ ttd }) => ttd || 'none'};
  text-decoration-style: ${({ ttds }) => ttds || 'dotted'};
  text-decoration-color: ${({ ttdc }) => ttdc || Colors.text100};
  line-height: ${({ lh }) => `${lh || Spaces.xl}px`};

  ${(props) => constructSizing(props, 'margin')};
  ${(props) => constructSizing(props, 'padding')};

  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
`;

export const Box = styled.View<StyledProps>`
  flex: ${({ f }) => f || '0 1 auto'};
  flex-direction: ${({ fd }) => fd || 'column'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  flex-wrap: ${({ fw }) => fw || 'nowrap'};

  align-items: ${({ ai }) => ai || 'stretch'};

  ${(props) => constructSizing(props, 'margin')};
  ${(props) => constructSizing(props, 'padding')};

  border-width: ${({ bw }) => bw || '0px'};
  border-color: ${({ bc }) => bc || 'transparent'};

  border-radius: ${({ br }) => br || '0px'};
  background-color: ${({ wdbg, bgc }) => constructBgc(wdbg, bgc)};

  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
  min-height: ${({ mh }) => mh || 'auto'};
  ${({ shadowed }) => shadowed && shadow}

  z-index: ${({ z }) => z || 1};
`;
