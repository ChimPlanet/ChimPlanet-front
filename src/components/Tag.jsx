import { PropTypes, styled } from '@chimplanet/ui';

import CloseIcon from '@/common/icons/CloseIcon';

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
  removeSelf: PropTypes.func,
};

/**
 * @typedef {Object} TagProps
 * @property {string} name
 * @property {string?} color
 * @property {string?} backgroundColor
 * @property {string} padding
 * @property {string} fontSize
 * @property {number?} weight
 * @property {string?} borderColor
 * @property {()=>void} onClick
 * @property {()=>void} removeSelf
 *
 * @param {TagProps}
 */
export default function Tag({
  color = 'black',
  borderColor = 'black',
  backgroundColor = 'transparent',
  weight = 500,
  name,
  removeSelf,
  onClick = emptyFunction,
  fontSize = '12px',
  padding = '2.5px 5px',
}) {
  return (
    <TagContainer
      padding={padding}
      customColor={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      <TagText fontSize={fontSize} weight={weight}>
        #{name}&nbsp;
      </TagText>
      {removeSelf && (
        <TagCloseIconWrapper onClick={removeSelf}>
          <CloseIcon />
        </TagCloseIconWrapper>
      )}
    </TagContainer>
  );
}

function emptyFunction() {}

const TagContainer = styled.div`
  border-radius: 100px;
  border: 1px solid ${({ borderColor }) => borderColor};
  color: ${({ customColor }) => customColor};
  fill: ${({ customColor }) => customColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  white-space: nowrap;
`;

const TagText = styled.span`
  font-weight: ${({ weight }) => weight};
  display: inline-block;
  padding-left: 6px;
  vertical-align: middle;
  font-size: ${({ fontSize }) => fontSize};
`;

const TagCloseIconWrapper = styled.span`
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
  }
`;
