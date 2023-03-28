import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import { Radio, RadioGroup } from '@mui/material';

export const Container = styled.div`
  margin-top: 24px;
`;

export const Title = styled.p``;

export const Content = styled.div`
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #454545;
  border-radius: 4px;
`;

export const LinkInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #454545;
`;

export const SwitchContainer = styled(RadioGroup)`
  margin-top: 10;
`;

export const SwitchRadio = muiStyled(Radio)({
  color: '#DBDEE2',
  '&.Mui-checked': {
    color: '#00BD2F',
  },
});

export const RadioText = styled.span`
  font-weight: 300;
  font-size: 14px;
`;
