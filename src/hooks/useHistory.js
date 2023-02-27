import { HistoryContext } from '@/utils/Context/historyContext';
import useUpdate from './useUpdate';

export default function useHistory() {
  const update = useUpdate();

  return {
    history: HistoryContext.getInstance().get(),
    removeAll() {
      HistoryContext.getInstance().reset();
      update();
    },
    removeHistory(index) {
      HistoryContext.getInstance().removeByIndex(index);
      update();
    },
    addHistory(history) {
      HistoryContext.getInstance().addFront(history);
      update();
    },
  };
}
