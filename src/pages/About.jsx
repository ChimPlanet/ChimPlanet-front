import { Link } from 'react-router-dom';
import { HOME_PATH } from '@/constants/route';

export default function About() {
  return (
    <>
      About
      <Link to={HOME_PATH}>go home</Link>
    </>
  );
}
