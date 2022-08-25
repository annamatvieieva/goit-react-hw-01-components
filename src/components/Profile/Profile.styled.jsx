import styled from 'styled-components';

export const ProfileBox= styled.div`
 max-width: 250px;
 overflow: hidden;
 margin-top: ${ p => p.theme.space[5]}px;
  margin-bottom: ${ p => p.theme.space[5]}px;
	margin-left: auto;
	margin-right: auto;
border: ${ p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
border-radius: ${ p => p.theme.radii.md};
box-shadow: 8px 8px 24px -21px ${p => p.theme.colors.secondary};
`;