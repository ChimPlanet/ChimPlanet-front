import { styled } from '@chimplanet/ui';

import { Modal } from '@mui/material';

export default function JobImageModal({ close, src }) {
  return (
    <Modal
      open={src !== null}
      onClose={close}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        },
      }}
    >
      <Content>
        <Image referrerPolicy="no-referrer" src={src} alt={src} />
        <OpenSourceLink
          rel="noreferrer"
          referrerPolicy="no-referrer"
          href={src ?? ''}
          target="_blank"
        >
          원본 이미지 보기
        </OpenSourceLink>
      </Content>
    </Modal>
  );
}

const Content = styled.div`
  margin: auto;
`;

const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  display: block;
  object-fit: scale-down;
`;

const OpenSourceLink = styled.a`
  display: block;
  margin-top: 18px;
  font-size: 18px;
  font-weight: 500;
  color: #a8a8a8;
`;
