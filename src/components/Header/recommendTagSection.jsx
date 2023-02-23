import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
`;

RecommendTagSection.propTypes = {
  word: PropTypes.string,
  addTag: PropTypes.func,
};

export default function RecommendTagSection({ word, addTag }) {
  return (
    <Container>
      <Title>추천 태그</Title>
    </Container>
  );
}
