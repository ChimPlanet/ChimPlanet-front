import { preloadTasks } from '@constants/preload';
import { preload } from '@utils/load';
import ReactDOM from 'react-dom/client';
import App from './App';

preload(preloadTasks);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
