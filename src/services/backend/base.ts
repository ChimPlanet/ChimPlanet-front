type Option<T, O> = {
  parse?: (o: T) => O;
};

interface Request {
  method: 'PUT' | 'GET' | 'POST' | 'DELETE';
  uri: string;
  data?: object;
}

type RequesterConfig<Payload> = Request | ((o: Payload) => Request);

const useOption = <From, To = unknown>(data: From, option?: Option<From, To>) => {
  let res: any = data;
  if (option && option.parse) {
    res = option.parse(res);
  }
  return res as To extends unknown ? From : To;
};

const parseAPIResponse = async (response: Response) => {
  if (!response.ok) throw new Error('Network response was not ok.');
  return await response.json();
};

export const client = async <T>(request: Request): Promise<T> => {
  const raw = await fetch(import.meta.env.VITE_API_BASE + request.uri, {
    method: request.method,
    body: request.data ? JSON.stringify(request.data) : null,
  });
  return await parseAPIResponse(raw);
};

export const createAPI =
  <Payload = void, From = unknown, To = unknown>(
    config: RequesterConfig<Payload>,
    option: Option<From, To>,
  ) =>
  async (payload: Payload): Promise<To extends unknown ? From : To> => {
    const request = typeof config === 'function' ? config(payload) : config;
    const data = await client<From>(request);
    return useOption(data, option);
  };
