import { Paths } from '@routes';

export const hideHeaderMenubar = (screenType, pathname) => {
  if (screenType === 'desktop') {
    return false;
  }
  if (screenType === 'mobile' && pathname === Paths.NotFound) {
    return true;
  }

  return pathname.startsWith(Paths.Job);
};

export const enableAlternativeHeader = (screenType, pathname) => {
  if (screenType === 'desktop' || !pathname.startsWith(Paths.Search)) {
    return false;
  }

  if (pathname.startsWith(Paths.Search) || pathname.startsWith(Paths.Job)) {
    return true;
  }

  return false;
};

export const enableAlternativeMenu = (screenType, pathname) => {
  if (screenType === 'desktop') {
    return false;
  }

  return pathname.startsWith(Paths.Search);
};
