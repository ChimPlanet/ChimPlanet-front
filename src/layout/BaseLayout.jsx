import Header from '@/components/Header';
import { element } from 'prop-types';
BaseLayout.propTypes = {
  children: element,
};

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
