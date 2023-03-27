import styled from "styled-components";
import { XIcon } from "@/common/icons";

export default function ContentSettingHeader({handleSettings}) {

    return(
        <Container>
            세부 정보 수정
            <div onClick={handleSettings}>
                <IconContainer />
            </div>
        </Container>
    )   
}

const Container = styled.header`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    padding: 18px 20px;
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
})
