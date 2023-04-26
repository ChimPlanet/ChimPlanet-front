import styled from "styled-components";

export default function AddTagFooter({handleModal, addCategory}){
    return(

        <ButtonContainer>
            <Button color='#000000' onClick={handleModal}>
                취소
            </Button>
            <Button bgc='#00BD2F' color='#FFFFFF' onClick={addCategory}>
                완료
            </Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    //height: 52px;
    padding: 15px 13px 5px 0;
    border-top: 1px solid #DBDEE2;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    padding: 9px 41px;
    border: 1px solid #DBDEE2;
    margin-right: 8px;
    background-color: ${({bgc})=>bgc};
    color: ${({color})=> color}
`;