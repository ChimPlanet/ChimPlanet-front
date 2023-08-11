import JobInfiniteScroll from '@/components/JobInfiniteScroll';
import JobNavBar from '@/components/JobNavBar';
import { useArticleContext } from '@/context/articleContext';
import { useJobOfferBasic, useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import { styled } from '@chimplanet/ui';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const Job = ({ parId }) => {
  //게시글 리스트
  const [dataList, setDataList] = useState([]);
  const [offerList, setOfferList] = useState([]);
  //게시글 요청 파라미터
  const [lastArticleId, setLastArticleId] = useState(null);
  const [lastInputValue, setLastInputValue] = useState('');
  const [page, setPage] = useState(0);
  //게시글 분류
  const [sortValue, setSortValue] = useState({
    text: '최신순',
    value: 'regDate',
  });
  const [isEnd, setIsEnd] = useState({
    text: '구인중',
    value: 'ING',
  });
  const [select, setSelect] = useState(false);
  //디테일 모달
  const [offerData, setOfferData] = useState(null);
  const [, { open }] = useArticleContext();
  // 가져오는 게시글 수
  const size = 12;

  const onSelect = () => {
    setSelect(!select);
  };

  const directButton = useCallback(
    (e, value) => {
      setIsEnd({
        text: e.target.innerHTML,
        value: value,
      });
      setDataList([]);
      setOfferList([]);
      setPage(0);
      setLastArticleId(null);
      setLastInputValue(null);
    },
    [offerList],
  );

  const setValue = useCallback(
    (e, value) => {
      setSortValue({
        text: e.target.innerHTML,
        value: value === 'regDate' ? '' : value,
      });
      setDataList([]);
      setOfferList([]);
      setPage(0);
      setLastArticleId(null);
      setSelect(false);
      setLastInputValue(null);
    },
    [offerList],
  );

  if (parId !== null && parId !== 0) {
    const { data: offer } = useJobOfferDetail(parId);
    useMemo(() => {
      setOfferData(offer);
    }, [offer]);
  }

  useEffect(() => {
    open(offerData);
  }, []);

  const { data } = useJobOfferBasic(
    lastArticleId,
    size,
    page,
    sortValue.value,
    isEnd.value,
    lastInputValue,
  );

  useEffect(() => {
    setDataList(data.content.map(Offer));
  }, [data]);

  useEffect(() => {
    const newList = [...dataList];
    const inputValue = sortValue.value;
    setLastArticleId(dataList[dataList.length - 1]?.id);
    if (inputValue === 'regDate') {
      dataList.length === 0
        ? setLastInputValue(null)
        : setLastInputValue(dataList[dataList.length - 1]?.data.regDate);
    } else if (inputValue === 'readCount') {
      dataList.length === 0
        ? setLastInputValue(null)
        : setLastInputValue(dataList[dataList.length - 1]?.data.readCount);
    }
    setOfferList((prev) => [...prev, ...newList]);
  }, [dataList]);

  const getMoreItem = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container>
      <JobNavBar
        total={offerList.length}
        setValue={setValue}
        directButton={directButton}
        isEnd={isEnd}
        sortValue={sortValue}
        onSelect={onSelect}
        select={select}
      />
      <JobInfiniteScroll
        List={offerList}
        parId={parId}
        getMoreItem={getMoreItem}
        last={data.last}
      />
    </Container>
  );
};

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;
