import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { ListSort, PostSort } from '@/atoms/PostList';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';
import JobNavBar from '@/components/JobNavBar';
import JobInfiniteScroll from '@/components/JobInfiniteScroll';
import { useArticleContext } from '@/context/articleContext';
import mock_job_offers from '@/__mocks__/mock_job_offers';

const Container = styled.section`
  width: ${(props) => props.width};
  margin: 0 auto;
`;

export default function Job({parId}) {
  const [isLoading, setIsLoading] = useState(false);
  const [num, setNum] = useState(5);
  const [postList, setPostList] = useState([]);
  const [newList, setNewList] = useState([]);
  const postSort = useRecoilValue(PostSort);
  const listSort = useRecoilValue(ListSort);
  const target = useRef();
  const [, { open }] = useArticleContext();
  const { context } = useJobSection();

  useEffect(()=>{
    if( typeof parId === 'number' && parId !== 0){
      open(parId);
    };
  },[]);

  async function getUser() {
    /* try {
            const response = await axios.get('http://43.207.33.71:8080/api/boards');
            return response.data;
        } catch (error) {
            console.error(error);
        }; */
    return mock_job_offers;
  }

  const { data } = useQuery('repoData', getUser);

  const postValue = postSort.find((item) => item.isClicked === 1);

  useEffect(() => {
    if (postValue.text === '구인중') {
      setPostList(data.slice(0, num).filter((item) => item.isEnd === 'ING'));
    } else if (postValue.text === '모집마감') {
      setPostList(data.slice(0, num).filter((item) => item.isEnd === 'END'));
    } else if (postValue.text === '전체') {
      setPostList(data.slice(0, num));
    }
    setIsLoading(true);
  }, [data, postValue, num]);

  useEffect(() => {
    const newPostList = [...postList];
    if (listSort === '조회순') {
      setNewList(
        newPostList.sort(
          (a, b) => b.readCount.replace(',', '') - a.readCount.replace(',', ''),
        ),
      );
    } else if (listSort === '추천순') {
      setNewList(newPostList.sort((a, b) => b.likeCount - a.likeCount));
    } else {
      setNewList(postList);
    }
  }, [listSort, postList]);

  const getMoreItem = () => {
    if (data.length > num) {
      setNum((num) => num + 5);
      setIsLoading(false);
    };
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      //observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target.current]);

  return (
    <Container width={`${context.perPage * 270 - 20}px`}>
      <JobNavBar total={data.length} />
      <JobInfiniteScroll List={newList} parId={parId} />
      {!isLoading && <div>로딩 중</div>}
      {isLoading && !(data.length <= num) && <div ref={target}>s</div>}
      {data.length <= num && <div>게시물 끝</div>}
    </Container>
  );
}
