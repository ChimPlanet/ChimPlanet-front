import { useState, useEffect } from 'react'
import ContnetsTab from "./ContentsTab";
import ContentsOfferSection from "./ContentsOfferSection";
import { useJobOfferBasic  } from '@/query/offer';
import { Offer } from '@/service/offer';
import styled from 'styled-components';

export default function ContentsPosts(){

  const [Data, setData] = useState([])
  const [newList, setNewList] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectValue, setSelectValue] = useState('최신순');

  const [lastArticleId, setLastArticleId]= useState(null)
  const [page, setPage] = useState(0)

  const size = 12;

  const onSelect = () => {
    setSelect(!select);
  };

  const setValue = (e) => {
    setSelectValue(e);
    setSelect(!select);
  };

  const { data } = useJobOfferBasic(lastArticleId, size, page);

  useEffect(() => {
    setData((prevData) => [...prevData , ...data.content]);
  },[data])

  useEffect(() => {
    const newPostList = [...Data.map(Offer)];
    
    if (selectValue === '조회순') {
      setNewList(
        newPostList.sort((a, b) => b.data.readCount - a.data.readCount)
      );
    } else if (selectValue === '추천순') {
      setNewList(
        newPostList.sort((a, b) => b.data.likeCount - a.data.likeCount)
      );
    } else {
      setNewList(newPostList);
    }
    setLastArticleId(Data[Data.length - 1]?.articleId)
  }, [selectValue, Data]);

  const getMoreItem = () => {
    setPage((page) => page + 1);
  };

  return(

      <Container>
          <ContnetsTab 
          select={select} 
          selectValue={selectValue} 
          onSelect={onSelect} 
          setValue={setValue} 
          totalNum={Data.length} />
          <ContentsOfferSection
          jobs={newList}
          getMoreItem={getMoreItem}
          last={data.last} />
      </Container>

  );
};

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;