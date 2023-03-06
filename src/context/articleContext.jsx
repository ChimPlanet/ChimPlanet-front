import { createContext, useCallback, useState, useContext } from 'react';

const articleContext = createContext();

export function ArticleProvider({ children }) {
  const [articleId, setArticleId] = useState(null);

  const close = useCallback(() => setArticleId(null), [setArticleId]);

  const open = useCallback((id) => setArticleId(id), [setArticleId]);

  return (
    <articleContext.Provider
      children={children}
      value={[articleId, { open, close }]}
    />
  );
}

export function useArticleContext() {
  return useContext(articleContext);
}
