import { useState, useRef, useEffect } from 'react'
import styled from "styled-components";
import Modal from '@mui/material/Modal';
import DetailPostHeader from './DetailPostHeader';
import DetailMenuBar from './DetailMenuBar';
import PostTag from './PostTag';

const ContainerScroll = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;

const Container = styled.div`
    width: max-content;
    max-height: 100%;
    overflow-y: auto;
    margin: 138px auto 332px;
`;

const PostContainer = styled.div`
    display: flex;
`;

const Post = styled.div`
    width: 700px;
    height: max-content;
    border-radius: 8px;
    margin-right: 48px;
    padding: 28px 36px;
    background: #FFFFFF;
`;

const PostImg = styled.div`
    width: 600px;
    height: 300px;
    background: #D9D9D9;
`;

const PostText = styled.div`
    width: 580px;
    height: 912px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 110px;
`;

const SubTitle = styled.div`
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    color: #101C33;
    margin-bottom: 20px;
`;

const PostTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default function DetailModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ref = useRef()

    const a = ['마감', '구인 중', '상시모집'];

    const tags = ['#백엔드', '#프론트', '#UI/UX', '#개발자']


    const handleClickOutSide = (e) => {
        if (open && !ref.current.contains(e.target)) {
          setOpen(false);
        };
    };
    
    useEffect(() => {
        if (open) document.addEventListener('mousedown', handleClickOutSide);
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide);
        };
    });


    return(
        <>
            <button onClick={handleOpen}>Open modal</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ContainerScroll>
                    <Container ref={ref}>
                        <PostContainer>
                            <Post>
                                <DetailPostHeader status={a}/>
                                <PostImg>여기에 이미지가 들어갈 예정</PostImg>
                                <PostText>
                                    여기에 게시글 내용이 들어갈 예정
                                </PostText>
                                <SubTitle>
                                    태그
                                </SubTitle>
                                <PostTags>
                                    {tags.map(items=> <PostTag key={items} tag={items}/>)}
                                </PostTags>
                            </Post>
                            <DetailMenuBar/>
                        </PostContainer>
                    </Container>
                </ContainerScroll>
            </Modal>
        </>
    )
}