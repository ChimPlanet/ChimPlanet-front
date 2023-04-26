import styled from "styled-components";
import { XIcon } from "@/common/icons";

export default function AddTagHeader({handleModal}){
    return(
        <Container>
            태그 등록
            <div onClick={handleModal}>
                <IconContainer />
            </div>
        </Container>
    )
}

const Container = styled.div` 
    font-weight: 700;
    height: 56px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid #DBDEE2;
`;

const IconContainer = styled(XIcon)({
    width: '46px',
    height: '46px',
    background: '#ffffff',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
});