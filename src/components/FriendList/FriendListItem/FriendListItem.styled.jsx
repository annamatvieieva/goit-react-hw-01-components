import styled from 'styled-components';

const setBgColor = ({ isOnline, theme }) => {
  switch (isOnline) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.grey;
  }
};

export const ListElement = styled.li`
display: flex;
align-items: center;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
box-shadow: 3px 1px 11px 0px ${p => p.theme.colors.secondary};

&:not(:last-child) {
	margin-bottom: ${p => p.theme.space[4]}px;
}

img {
	width: 48px;
	height: auto;
	border: ${p => p.theme.borders.normal};
	border-radius: ${p => p.theme.radii.md};
	margin-right: ${p => p.theme.space[3]}px;
	margin-left: ${p => p.theme.space[3]}px;
	
}
p {
	font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
	}
`;

export const Chip = styled.span`
  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${setBgColor};
  }
`;
