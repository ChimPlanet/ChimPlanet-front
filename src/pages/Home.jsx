import { ABOUT_PATH } from '@/constants/route';
import { Link } from 'react-router-dom';

export default function Home() {
  return <Link to={ABOUT_PATH}>about</Link>;
}
