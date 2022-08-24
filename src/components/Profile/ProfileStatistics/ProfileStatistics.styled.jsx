import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
  width: 33.333%;
  height: 100%;
  border: ${ p => p.theme.borders.normal} ${ p => p.theme.colors.secondary};
`;

export const StatisticsText = styled.p`
  color: ${p => p.theme.colors.grey};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StatisticsTextBlack = styled(StatisticsText)`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
