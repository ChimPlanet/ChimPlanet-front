import styled from 'styled-components';

export default function PostTag({ tag }) {
  return <Tag>{tag}</Tag>;
}

const Tag = styled.div`
  padding: 5px 19px;
  border: 1px solid #dbdee2;
  border-radius: 100px;
  margin-right: 8px;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #8e94a0;
`;
