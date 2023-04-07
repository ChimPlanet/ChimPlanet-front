import styled from 'styled-components';
import ConfigurationRegisterOptionMenu from './ConfigurationRegisterOptionMenu';
import ConfigurationSequenceOptionMenu from './ConfigurationSequenceOptionMenu';

/**
 *
 * @param {{type: "sequence" | "register"}}
 * @returns
 */
export default function ConfigurableSidebarMenu({ type }) {
  return (
    <Container>
      {type === 'register' ? (
        <ConfigurationRegisterOptionMenu />
      ) : (
        <ConfigurationSequenceOptionMenu />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 32px;
`;
