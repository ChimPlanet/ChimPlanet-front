import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useUpdate from './useUpdate';

export default function useBookmark() {
  const update = useUpdate();

  return {
    bookmarks: BookmarkContext.getInstance().get(),
    resetBookmark() {
      BookmarkContext.getInstance().reset();
      update();
    },
    toggle(id) {
      BookmarkContext.getInstance().toggle(id);
      update();
    },
  };
}
