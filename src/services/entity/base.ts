type Field<From, To> = ((o: From) => To) | keyof From;

export type Template<From, To> = {
  [K in keyof To]: Field<From, To[K]>;
};

export const entity = <DAO, VO>(from: DAO, template: Template<DAO, VO>): VO =>
  Object.entries(template).reduce((e, [k, fn]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e[k] = typeof fn === 'function' ? fn(from) : from[fn];
    return e;
  }, {} as VO);

export const createEntityFactory =
  <DAO, VO>(template: Template<DAO, VO>) =>
  (from: DAO): VO =>
    entity(from, template);
