import { BookmarkContext } from '@utils/Context/bookmarkContext';
import useUpdate from '../common/hooks/useUpdate';

export default function useBookmark() {
  const update = useUpdate();

  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

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
    is(offer) {
      return bookmarkSet.has(offer.id);
    },
  };
}
