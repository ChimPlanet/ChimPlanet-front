/**
 * @template T
 * @param {Response} response
 * @returns {Promise<T>}
 */
const parseAPIResponse = async (response) => {
  if (!response.ok) throw new Error('Network response was not ok.');
  const data = await response.json();
  return data;
};

/**
 * @template T, O
 * @typedef {Object} Option
 * @property {(o: T)=> O} [parse]
 */

/**
 * @template T, O
 * @param {T} data
 * @param {Option<T,O>} [option]
 * @returns {O}
 */
const useOption = (data, option) => {
  let res = data;
  if (option && option.parse) {
    res = option.parse(res);
  }
  return res;
};

/**
 * @typedef {Object} Request
 * @property {"PUT" | "GET" | "POST" | "DELETE"} method
 * @property {string} uri
 * @property {object} [data]
 */

/**
 * @template T
 * @function
 * @param {Request} request
 * @returns {Promise<T>}
 */
export const client = async (request) => {
  const raw = await fetch(import.meta.env.VITE_API_BASE + request.uri, {
    method: request.method,
    body: request.data ? JSON.stringify(request.data) : null,
  });
  return await parseAPIResponse(raw);
};

/**
 * @template Payload
 * @typedef {Request | (o: Payload) => Request} RequesterConfig
 */

/**
 * @template {undefined} Payload
 * @template T
 * @template O
 * @function
 * @param {RequesterConfig<Payload>} config
 * @param {Option<T,O>} [option]
 * @returns {(payload: Payload)=> Promise<O>}
 */
export const createRequester = (config, option) => async (payload) => {
  const request = typeof config === 'function' ? config(payload) : config;
  /** @type {T} */
  const data = await client(request);
  return useOption(data, option);
};

/**
 * @template T, O
 * @typedef {(p: T)=>Promise<O>} Requester
 */
