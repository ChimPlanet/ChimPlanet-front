import styled from 'styled-components';
import { func, string } from 'prop-types';
import CloseIcon from './icons/CloseIcon';

const TagContainer = styled.div`
  border-radius: 100px;
  border: 1px solid ${({ customColor }) => customColor};
  color: ${({ customColor }) => customColor};
  fill: ${({ customColor }) => customColor};
  padding: ${({ padding }) => padding};
`;

const TagText = styled.span`
  display: inline-block;
  padding-top: 2px;
  padding-left: 6px;
  vertical-align: middle;
  cursor: hand;
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
  removeSelf: func,
};

/**
 * @param {{name: string, color?: string, padding?:string, removeSelf?():void}}
 */
export default function Tag({
  name,
  removeSelf,
  color = '#DBDEE2',
  padding = '2.5px 5px',
}) {
  return (
    <TagContainer padding={padding} customColor={color}>
      <TagText>#{name}&nbsp;</TagText>
      {removeSelf && (
        <TagCloseIconWrapper onClick={removeSelf}>
          <CloseIcon />
        </TagCloseIconWrapper>
      )}
    </TagContainer>
  );
}
