import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0.75px;
  flex-grow: 1;
  background-color: ${getRandomHexColor};
  padding: ${p => p.theme.space[2]}px;
`;

export const StatisticsText = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StatisticsBigText = styled(StatisticsText)`
 font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;