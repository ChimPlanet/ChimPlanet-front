import { useJobOfferDetail } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import JobDetailHeader from './jobDetailHeader';
import PostTag from './PostTag';

const Wrapper = styled.div`
  padding: 30px 2px 30px 45px;
`;

const Content = styled.div`
  max-height: 70vh;
  overflow: auto;

  &::-webkit-scrollbar {
    margin-right: 10px;
    width: 13px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 100px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
`;

const PostText = styled.div`
  padding-right: 25px;
  font-weight: 500;
  font-size: 16px;
`;

const SubTitle = styled.div`
  padding-top: 10px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #101c33;
  margin-bottom: 20px;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function JobDetailContent({ id }) {
  const { data } = useJobOfferDetail(id);

  return (
    <Wrapper>
      <JobDetailHeader
        title={data.title}
        status={data.status}
        date={data.date}
        time={data.time}
        views={data.views}
      />
      {/* <PostImg referrerPolicy="no-referrer" src={imgLink} /> */}
      <Content>
        <PostText
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      </Content>
      <SubTitle>태그</SubTitle>
      <PostTags>
        {data.tags.map((items) => (
          <PostTag key={items} tag={items}>
            {items}
          </PostTag>
        ))}
      </PostTags>
    </Wrapper>
  );
}

JobDetailContent.propTypes = {
  id: PropTypes.number.isRequired,
};
