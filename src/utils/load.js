/**
 * @typedef {object} Task
 * @property {string} key
 * @property {()=>Promise<any>} fetch
 * @property {(d: any)=>any} preprocess
 */

import { setLocalStorageValue } from './localStorage';

/**
 * @param {Task[]} tasks
 * @returns {Promise<void>}
 */
export const preload = async (tasks) => {
  await Promise.all(
    tasks.map(({ key, fetch, preprocess }) =>
      fetch().then((d) => {
        const v = preprocess(d);
        setLocalStorageValue(key, v);
      }),
    ),
  );
};
