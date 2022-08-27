import styled from 'styled-components';


export  const StatisticsBox = styled.section`
max-width: 500px;
margin-bottom: ${ p => p.theme.space[5]}px;
	margin-left: auto;
	margin-right: auto;
border: ${ p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;

export const StatisticsTitle = styled.h2`
line-height: ${p => p.theme.lineHeights.body};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
text-transform: uppercase;
`;