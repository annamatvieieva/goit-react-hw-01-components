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
box-shadow: 3px 1px 11px 0px ${p => p.theme.colors.secondary};
`;