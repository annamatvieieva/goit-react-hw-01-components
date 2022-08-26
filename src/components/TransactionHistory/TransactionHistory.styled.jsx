import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 600px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 8px 8px 24px -21px ${p => p.theme.colors.secondary};
  border-collapse: collapse;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};

	// &:before {
	// 	content: '';
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	right: 0;
	// 	bottom: 0;
	// 	border: 2px solid black;
	// 	border-radius: 8px;
	// }

  thead tr {
    background-color: ${p => p.theme.colors.accent};
  }

  tbody tr:nth-child(2n + 1) {
    background-color: ${p => p.theme.colors.background};
  }

  tbody tr:nth-child(2n) {
    background-color: ${p => p.theme.colors.primary};
  }

  th,
  td {
    padding: ${p => p.theme.space[1]}px;
    text-align: center;
    font-family: ${p => p.theme.fonts.monospace};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    border-right: ${p => p.theme.borders.normal}
      ${p => p.theme.colors.secondary};
  }

  thead th {
    width: 33.33%;
    color: ${p => p.theme.colors.white};
    text-transform: uppercase;
  }

  tbody td {
    color: ${p => p.theme.colors.grey};
  }
`;
