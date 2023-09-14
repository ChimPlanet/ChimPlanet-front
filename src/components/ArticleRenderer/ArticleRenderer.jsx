import { useArticle } from './hook';

export const ArticleRenderer = () => {
  const [id, { open, close }] = useArticle();

  // return <ArticleProvider article={}></ArticleProvider
  return <></>;
};
