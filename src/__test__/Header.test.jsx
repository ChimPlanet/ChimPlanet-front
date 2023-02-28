import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { MemoryRouter } from 'react-router-dom';
import queryClient, { QueryClientProvider } from '@/query';
import { Suspense } from 'react';
import Theme from '@/components/Theme';

const HeaderMock = () => (
  <Theme>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'Loading'}>
        <Header />
      </Suspense>
    </QueryClientProvider>
  </Theme>
);

describe('Header Component', () => {
  test('정상적으로 Logo 문자열이 출력된다.', () => {
    render(<HeaderMock />, { wrapper: MemoryRouter });
    let el = screen.getByText(/침플래닛/);
    expect(el).toBeInTheDocument();
  });

  test('태그 검색을 클릭하면, 태그 검색창 및 최근 검색 기록이 뜬다.', async () => {
    render(<HeaderMock />, { wrapper: MemoryRouter });
    const el = screen.getByPlaceholderText(/#태그 검색/);
    fireEvent.click(el);
    await new Promise((r) => setTimeout(r, 1000));
    const searchEl = screen.getByText(/최근 검색 기록/);
    expect(searchEl).toBeInTheDocument();
  });
});
