import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'
import { ListSort, PostSort } from "@/atoms/PostList"
import JobOffer from '@/components/JobOffer';
import JobNavBar from '@/components/JobNavBar';
import { SIZE_WIDTH } from '@/constants/size';

const Container = styled.section`
    width: ${SIZE_WIDTH}px;
    margin: 0 auto;
`;

const JobOfferContainer = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 250px 250px 250px 250px; 
    row-gap: 56px;
`;

export default function Job() {

    const [postList, setPostList] = useState([]);
    const [newList, setNewList] = useState([]);

    async function getUser() {
        try {
            const response = await axios.get('http://43.207.33.71:8080/api/boards');
            return response.data;
        } catch (error) {
            console.error(error);
        };
    };

    const { error, data } = useQuery('repoData', getUser);
    const postSort = useRecoilValue(PostSort);
    const listSort = useRecoilValue(ListSort);

    const postValue = postSort.find(item=>item.isClicked === 1);

    console.log(error);
    console.log(data);
    
    useEffect(()=>{
        if(postValue.text === '구인중'){
            setPostList(data.filter(item=>item.isEnd === 'ING'));
        }else if(postValue.text === '모집마감'){
            setPostList(data.filter(item=>item.isEnd === 'END'));
        }else if(postValue.text === '전체'){
            setPostList(data);
        }
    },[data, postValue]);

    useEffect(()=>{
        const newPostList = [...postList];
        if(listSort === '조회순'){
            setNewList(newPostList.sort((a, b)=> b.readCount.replace( ',','') - a.readCount.replace(',','')));
        }else if(listSort === '좋아요순'){
            setNewList(newPostList.sort((a, b)=> b.likeCount - a.likeCount));
        }else{
            setNewList(postList);
        }
    },[listSort, postList]);


    return (
        <Container>
            <JobNavBar/>
            <JobOfferContainer>
                { newList.map(item => 
                <JobOffer
                key={item.boardId}
                id={+item.boardId}
                title={item.boardTitle}
                writer={item.writer}
                writeAt={item.regDate}
                thumbnailUrl={item.redirectURL}
                viewCount={+item.readCount.replace( ',','')}
                isBookmarked={false}
                isClosed={item.isEnd === 'ING' ? false : true}
                style={{
                width: 250,
                }} /> 
                )}
            </JobOfferContainer>
        </Container>
    )
}