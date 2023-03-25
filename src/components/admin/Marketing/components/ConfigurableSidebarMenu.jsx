import styled from 'styled-components';
import ConfigurationRegisterOptionMenu from './ConfigurationRegisterOptionMenu';
import ConfigurationSequenceOptionMenu from './ConfigurationSequenceOptionMenu';

/**
 *
 * @param {{type: "sequence" | "register"}} param0
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

const Container = styled.div``;
