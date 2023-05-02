import { Route, Routes, useSearchParams } from 'chimplanet-ui';

import {
  ARTICLE_PATH,
  BOOKMARK_PATH,
  EVENT_PATH,
  HOME_PATH,
  OFFICIAL_PATH,
  JOB_PATH,
  SEARCH_PATH,
  ERROR_PATH,
} from '@/constants/route';
import Article from '@/pages/Article';
import Bookmark from '@/pages/Bookmark';
import Event from '@/pages/Event';
import Home from '@/pages/Home';

import NotFound from '@/pages/NotFound';
import Official from '@/pages/Official';
import Job from '@/pages/Job';
import Search from '@/pages/Search';
import Error from '@/pages/Error';

export default function AppRoutes() {
  const [id] = useSearchParams();

  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={BOOKMARK_PATH} element={<Bookmark />} />
      <Route path={ARTICLE_PATH} element={<Article />} />
      <Route path={JOB_PATH} element={<Job parId={+id.get('id')} />} />
      <Route path={EVENT_PATH} element={<Event />} />
      <Route path={OFFICIAL_PATH} element={<Official />} />
      <Route path={SEARCH_PATH} element={<Search />} />
      <Route path={ERROR_PATH} element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
