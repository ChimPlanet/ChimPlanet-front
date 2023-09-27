import { setLocalStorageValue } from './storage';

interface Task {
  key: string;
  fetch: () => Promise<any>;
  preprocess: (d: any) => any;
}

export const preload = async (tasks: Task[]) => {
  await Promise.all(
    tasks.map(({ key, fetch, preprocess }) =>
      fetch().then((d) => {
        const v = preprocess(d);
        setLocalStorageValue(key, v);
      }),
    ),
  );
};

export const preloadImages = (sources: string[]) => {
  if (Array.isArray(sources)) {
    sources.forEach((url) => {
      if (url) {
        new Image().src = url;
      }
    });
  }
};
