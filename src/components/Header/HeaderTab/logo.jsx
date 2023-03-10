import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HOME_PATH } from '@/constants/route';

const LogoLink = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.logo};
`;

export default function Logo() {
  return <LogoLink to={HOME_PATH}>μΉ¨νλλ</LogoLink>;
}
