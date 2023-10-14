import { UIOfferVO } from '../../../../chimplanet-ui/src/components/JobOffer/JobOffer';
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

export const parseUIOffer = (offer: Offer, isBookmarked: (_: number) => boolean): UIOfferVO => ({
  id: offer.id,
  title: offer.title,
  writer: offer.writer,
  like: offer.like,
  view: offer.view,
  writeAt: offer.date,
  redirectURL: offer.redirectURL,
  thumbnailURL: offer.thumbnailURL,
  closed: offer.isClosed,
  regular: offer.isRegular,
  bookmarked: isBookmarked(offer.id),
});

interface OfferContentDAO {
  articleId: string;
  content: string;
  redirectURL: string;
  tags?: {
    boardTagId: number;
    tagObjResponseDto: { tagId: number; tagName: string; parentTagId: number; childTagId: number };
  }[];
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
  tags: ({ tags }) => (tags ? tags.map((t) => t.tagObjResponseDto.tagName) : []),
  profileImageURL: ({ profileImageUrl }) => pp.profileImageUrl(profileImageUrl) || '',
  isClosed: ({ isEnd }) => pp.isClosed(isEnd),
});
