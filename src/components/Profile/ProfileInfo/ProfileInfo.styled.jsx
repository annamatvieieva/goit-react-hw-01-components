import styled from 'styled-components';

export const ProfileAvatar = styled.img`
  width: ${p => p.theme.space[7]}px;
  height: auto;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileDescription = styled.p`
  color: ${p => p.theme.colors.grey};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const ProfileName = styled(ProfileDescription)`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
