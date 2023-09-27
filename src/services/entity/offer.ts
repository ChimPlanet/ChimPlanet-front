import { createEntityFactory } from './base';
import * as pp from './preprocess';

export interface OfferDAO {
  articleId: string;
  boardTitle: string;
  writer: string;
  likeCount: string;
  readCount: string;
  regDate: string;
  redirectURL: string;
  thumbnailURL: string;
  isEnd: boolean;
  boardtags: string[];
  unauthorized: boolean;
}

export interface Offer {
  id: number;
  title: string;
  writer: string;
  like: number;
  view: number;
  date: Date;
  redirectURL: string;
  thumbnailURL: string;
  isClosed: boolean;
  isRegular: boolean;
  isThumbnail: boolean;
  tags: string[];
  needAuth: boolean;
}

export const parseOfferFromResponse = createEntityFactory<OfferDAO, Offer>({
  id: ({ articleId }) => parseInt(articleId),
  redirectURL: 'redirectURL',
  writer: 'writer',
  tags: 'boardtags',
  title: ({ boardTitle }) => pp.title(boardTitle),
  like: ({ likeCount }) => parseInt(likeCount),
  view: ({ readCount }) => parseInt(readCount),
  date: ({ regDate }) => new Date(regDate),
  thumbnailURL: ({ thumbnailURL }) => pp.thumbnailURL(thumbnailURL),
  isClosed: ({ isEnd }) => pp.isClosed(isEnd),
  isRegular: ({ boardtags }) => pp.isRegular(boardtags),
  isThumbnail: ({ thumbnailURL }) => pp.isThumbnail(thumbnailURL),
  needAuth: ({ unauthorized }) => unauthorized,
});

interface OfferContentDAO {
  articleId: string;
  content: string;
  redirectURL: string;
  tags: string[];
  profileImageUrl: string;
  isEnd: string;
  boardTitle: string;
  writer: string;
  regDate: string;
  readCount: string;
}

export interface OfferContent {
  id: number;
  title: string;
  writer: string;
  date: Date;
  view: number;
  content: string;
  redirectURL: string;
  tags: string[];
  profileImageURL: string;
  isClosed: boolean;
}

export const parseOfferContentFromResponse = createEntityFactory<OfferContentDAO, OfferContent>({
  id: ({ articleId }) => parseInt(articleId),
  content: 'content',
  title: 'boardTitle',
  writer: 'writer',
  date: ({ regDate }) => new Date(regDate),
  view: ({ readCount }) => parseInt(readCount),
  redirectURL: 'redirectURL',
  tags: 'tags',
  profileImageURL: ({ profileImageUrl }) => pp.profileImageUrl(profileImageUrl) || '',
  isClosed: ({ isEnd }) => pp.isClosed(isEnd),
});
