import { HistoryContext } from '@utils/Context/historyContext';
import useUpdate from '../common/hooks/useUpdate';

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
    /**
     * @param {string[]} history
     */
    addHistory(history) {
      HistoryContext.getInstance().addFront(history);
      update();
    },
  };
}
