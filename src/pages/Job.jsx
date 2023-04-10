import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';
import JobNavBar from '@/components/JobNavBar';
import JobInfiniteScroll from '@/components/JobInfiniteScroll';
import { useArticleContext } from '@/context/articleContext';
import { useJobOfferBasic , useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';

export default function Job({ parId }) {

  //게시글 리스트
  const [Data, setData] = useState([])
  const [postList, setPostList] = useState([]);
  const [newList, setNewList] = useState([]);
  //게시글 요청 파라미터
  const [lastArticleId, setLastArticleId]= useState(null)
  const [page, setPage] = useState(0)
  //게시글 분류
  const [selectValue, setSelectValue] = useState('최신순');
  const [currentList, setCurrentList] = useState('구인중');
  const [select, setSelect] = useState(false);
  //디테일 모달
  const [offerData, setOfferData] =  useState(null);
  const [,{ open }] = useArticleContext();
  const { context } = useJobSection();
  // 가져오는 게시글 수
  const size = 12 

  const onSelect = () => {
    setSelect(!select);
  };

  const directButton = (e) =>{
    setCurrentList(e.target.innerHTML)
  };

  const setValue = (e) => {
    setSelectValue(e.target.innerHTML);
    setSelect(!select);
  };

  if( parId !== null && parId !== 0){
    const { data : offer } = useJobOfferDetail(parId);
    useMemo(()=>{
      setOfferData(offer)
    },[offer]);
  };

  useEffect(()=> {open(offerData)},[]);

  const { data } = useJobOfferBasic(lastArticleId, size, page);

  useEffect(() => {
    setData((prevData) => [...prevData ,...data.content]);
  },[data])

  useEffect(() => {

    const newData = [...Data];

    if (currentList === '구인중') {
      setPostList(newData.map(Offer).filter((item) => item.data.isEnd === 'ING'));
    } else if (currentList === '모집마감') {
      setPostList(newData.map(Offer).filter((item) => item.data.isEnd === 'END'));
    } else if (currentList === '전체') {
      setPostList(newData.map(Offer));
    }
    setLastArticleId(newData[newData.length - 1]?.articleId);
  }, [currentList, Data]); 

  useEffect(() => {
    const newPostList = [...postList];
    
    if (selectValue === '조회순') {
      setNewList(
        newPostList.sort((a, b) => b.data.readCount - a.data.readCount)
      );
    } else if (selectValue === '추천순') {
      setNewList(
        newPostList.sort((a, b) => b.data.likeCount - a.data.likeCount)
      );
    } else {
      setNewList(postList);
    }
  }, [selectValue, postList]);
 
  const getMoreItem = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container width={`${context.perPage * 270 - 20}px`}>
      <JobNavBar 
      total={Data.length} 
      setValue={setValue} 
      directButton={directButton} 
      currentList={currentList} 
      selectValue={selectValue}
      onSelect={onSelect} 
      select={select} />
      <JobInfiniteScroll 
      List={newList}
      parId={parId}
      getMoreItem={getMoreItem}
      last={data.last} />
    </Container>
  );
}

const Container = styled.section`
  width: ${(props) => props.width};
  margin: 0 auto;
`;