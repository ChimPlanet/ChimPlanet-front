import backend from '@services/backend';

/** @type {import('@utils/load').Task[]} */
export const preloadTasks = [
  {
    key: 'banners',
    fetch: backend.banners,
    preprocess: (d) => {
      if (!Array.isArray(d)) return;

      d.forEach((item) => item.yn && (new Image().src = item.sourceUrl));
      return d;
    },
  },
  {
    key: 'tags',
    fetch: backend.tags,
    preprocess: (d) => {
      if (!Array.isArray(d)) return;
      return d;
    },
  },
];
