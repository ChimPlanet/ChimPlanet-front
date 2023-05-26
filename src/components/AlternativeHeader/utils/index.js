import { JOB_PATH, NOTFOUND_PATH, SEARCH_PATH } from '@/constants/route';

export const hideHeaderMenubar = (screenType, pathname) => {
  if (screenType === 'desktop') {
    return false;
  }
  if (screenType === 'mobile' && pathname === NOTFOUND_PATH) {
    return true;
  }

  return pathname.startsWith(JOB_PATH);
};

export const enableAlternativeHeader = (screenType, pathname) => {
  if (screenType === 'desktop' || !pathname.startsWith(SEARCH_PATH)) {
    return false;
  }

  if (pathname.startsWith(SEARCH_PATH) || pathname.startsWith(JOB_PATH)) {
    return true;
  }

  return false;
};

export const enableAlternativeMenu = (screenType, pathname) => {
  if (screenType === 'desktop') {
    return false;
  }

  return pathname.startsWith(SEARCH_PATH);
};
