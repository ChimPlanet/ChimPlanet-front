import styled from 'styled-components';
import { func, string } from 'prop-types';
import CloseIcon from './icons/CloseIcon';

function emptyFunction() {}

const TagContainer = styled.div`
  border-radius: 100px;
  border: 1px solid ${({ customColor }) => customColor};
  color: ${({ customColor }) => customColor};
  fill: ${({ customColor }) => customColor};
  padding: ${({ padding }) => padding};
  cursor: pointer;
`;

const TagText = styled.span`
  display: inline-block;
  padding-top: 2px;
  padding-left: 6px;
  vertical-align: middle;
`;

const TagCloseIconWrapper = styled.span`
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
  }
`;

Tag.propTypes = {
  name: string.isRequired,
  color: string,
  padding: string,
  onClick: func,
  removeSelf: func,
};

/**
 * @param {{name: string, color?: string, padding?:string, removeSelf?():void, onClick?(): void}}
 */
export default function Tag({
  color = 'black',
  name,
  removeSelf,
  onClick = emptyFunction,
  padding = '2.5px 5px',
}) {
  return (
    <TagContainer padding={padding} customColor={color} onClick={onClick}>
      <TagText>#{name}&nbsp;</TagText>
      {removeSelf && (
        <TagCloseIconWrapper onClick={removeSelf}>
          <CloseIcon />
        </TagCloseIconWrapper>
      )}
    </TagContainer>
  );
}
