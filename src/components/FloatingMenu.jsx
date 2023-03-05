import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

/**
 * @typedef {object} FloatingAnchorContainerProps
 * @property {JSX.Element} children
 * @property {React.MutableRefObject<HTMLDivElement>} anchorRef
 * @property {"absolute"|"fixed"} position
 * @property {()=>void} close
 *
 */
export default function FloatingMenu({
  children,
  anchorRef,
  position = 'absolute',
  close,
  ...props
}) {
  return (
    <Container
      onMouseLeave={close}
      position={position}
      top={anchorRef.current?.getBoundingClientRect().bottom}
      left={anchorRef.current?.getBoundingClientRect().left}
      {...props}
    >
      {children}
    </Container>
  );
}

FloatingMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
