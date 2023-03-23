import styled from 'styled-components';
import { useState, useRef, useMemo } from 'react';

export default function ConfigurableMainLayout({ children, Options }) {
  const [isConfigurable, setIsConfigurable] = useState(false);

  const layoutRef = useRef(null);

  const activeConfigurable = () => setIsConfigurable(true);
  const inactiveConfigurable = () => setIsConfigurable(false);

  const position = useMemo(
    () => ({
      x: layoutRef.current?.getBoundingClientRect().left,
      y: layoutRef.current?.getBoundingClientRect().top,
    }),
    [layoutRef.current],
  );

  return (
    <Layout
      ref={layoutRef}
      onMouseEnter={activeConfigurable}
      onMouseLeave={inactiveConfigurable}
      data-configurable={isConfigurable}
    >
      {isConfigurable && (
        <OptionsBox posX={position.x} posY={position.y}>
          {Options}
        </OptionsBox>
      )}
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  box-style: border-box;
  height: 375px;

  &[data-configurable='true'] {
    border: 4px solid ${({ theme }) => theme.colors.logo};
  }
`;

const OptionsBox = styled.div`
  position: absolute;
  z-index: 1000;
  ${({ posX, posY }) => `
    left: ${posX};
    top: ${posY};
  `}
`;
