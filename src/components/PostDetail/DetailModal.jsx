import { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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

    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();

    const {
        id,
        originalURL,
        title,
        status,
        date,
        time,
        views,
        imgLink,
        text,
        tags
    } = location.state;

    const handleClickOutSide = (e) => {
        if (!ref.current.contains(e.target)) {
          navigate('/about');
        };
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide);
        };
    });

    return(
        <>  
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ContainerScroll>
                    <Container ref={ref}>
                        <PostContainer>
                            <Post>
                                <DetailPostHeader 
                                title={title} 
                                status={status} 
                                date={date} 
                                time={time}
                                views={views}/>
                                <PostImg>
                                    <img src={imgLink} />
                                    여기에 이미지가 들어갈 예정
                                </PostImg>
                                <PostText>
                                    {text}
                                </PostText>
                                <SubTitle>
                                    태그
                                </SubTitle>
                                <PostTags>
                                    {tags.map(items=> <PostTag key={items} tag={items}>{items}</PostTag >)}
                                </PostTags>
                            </Post>
                            <DetailMenuBar id={id} originalURL={originalURL}/>
                        </PostContainer>
                    </Container>
                </ContainerScroll>
            </Modal>
        </>
    )
}