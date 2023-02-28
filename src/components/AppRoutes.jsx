import { ARTICLE_PATH, BOOKMARK_PATH, HOME_PATH, JOB_PATH } from '@/constants/route';
import About from '@/pages/About';
import Article from '@/pages/Article';
import Bookmark from '@/pages/Bookmark';
import Home from '@/pages/Home';
import Job from '@/pages/Job';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={BOOKMARK_PATH} element={<Bookmark />} />
      <Route path={ARTICLE_PATH} element={<Article />} />
      <Route path={JOB_PATH} element={<Job />} />
      <Route path={'/about'} element={<About />} />
    </Routes>
  );
}
