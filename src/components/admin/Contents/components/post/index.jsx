import { useState, useMemo } from 'react'
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ListSort } from "@/atoms/PostList";
import ContnetsTab from "./ContentsTab";
import ContentsOfferSection from "./ContentsOfferSection";
import { useRecentOffers } from '@/query/offer';

export default function ContentsPosts(){

    const [postList, setPostList] = useState([]);
    const [newList, setNewList] = useState([]);
    const [select, setSelect] = useState(false);
    const [selectValue, setSelectValue] = useState('최신순');
    const listSort = useRecoilValue(ListSort);
    const sort = useSetRecoilState(ListSort);

    const { data } = useRecentOffers();

    const onSelect = () => {
        setSelect(!select);
    };

    const setValue = (value) => {
        setSelectValue(value);
        sort(value);
        onSelect();
    };

    useMemo(()=>{
      setPostList(data);
    },[data])

    useMemo(() => {
        const newPostList = [...postList];
        if (listSort === '조회순') {
          setNewList(
            newPostList.sort((a, b) => b.data.readCount - a.data.readCount)
          );
        } else if (listSort === '추천순') {
          setNewList(
            newPostList.sort((a, b) => b.data.likeCount - a.data.likeCount)
          );
        } else {
          setNewList(postList);
        }
    }, [listSort, postList]);

    return(
        <>
            <ContnetsTab 
            select={select} 
            selectValue={selectValue} 
            onSelect={onSelect} 
            setValue={setValue} 
            totalNum={postList.length} />
            <ContentsOfferSection jobs={newList} />
        </>
    );
};