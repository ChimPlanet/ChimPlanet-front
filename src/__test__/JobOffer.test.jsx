import { render, screen } from '@testing-library/react';
import { JobOffer } from '@/common/components/JobOffer';
import { ThemeProvider } from '@/context/themeContext';

jest.mock('@/constants', () => ({ getApiBase: () => 'localhost:3000' }));

const MockJobOffer = (props) => (
  <ThemeProvider children={<JobOffer {...props} />} />
);

describe('JobOffer Component', () => {
  test('문자열이 출력된다.', () => {
    render(
      <MockJobOffer
        id={0}
        title="UX/UI 디자이너 구인"
        writer="침플래닛"
        writeAt="2023-02-27"
        thumbnailURL="https://cafeptthumb-phinf.pstatic.net/MjAyMzAyMDhfMTI1/MDAxNjc1ODY1OTk1MjUx.APGGjNqh9LS6w7tSLOcMAxn6_gAlP6INceA8x2q50Pog.xW5jRHAnSA2q_i7KN7to7wWTZKQPW3s3nk823D8u614g.JPEG/0001.jpg?type=w1600"
        isThumbnail={true}
        viewCount={12000}
        isBookmarked={false}
        isClosed={false}
        isRegular={true}
        onBookmarkClick={() => {}}
        style={{
          width: 250,
        }}
      />,
    );
    let el = screen.getByText(/UX\/UI 디자이너 구인/);
    expect(el).toBeInTheDocument();
  });
});
