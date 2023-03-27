
import { ModalState } from '@/atoms/ContentManagement';
import { useSetRecoilState, useRecoilValue } from "recoil";
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';
import ContentJobOffer from "./ContentJobOffer";
//import ContentOfferSubscriber from "@/components/admin/Contents/components/ContentOfferSubscriber";
import mock_Content_job_detail from '../../__mocks__/mock_Content_job_detail';

export default function ContentMapJobOffer({jobs}){

    const sort = useSetRecoilState(ModalState);
    const modalState = useRecoilValue(ModalState);

    const { toggle } = useBookmark();
    const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

    const onSort = () => {
        sort(mock_Content_job_detail);
    };

    return(
        <>
            {jobs.map(offer => (
                <ContentJobOffer 
                    onClick={onSort}
                    key={offer.id}
                    id={offer.id}
                    thumbnailURL={offer.thumbnailURL}
                    isThumbnail={offer.isThumbnail}
                    title={offer.title}
                    writer={offer.writer}
                    writeAt={offer.regDate}
                    redirectURL={offer.redirectURL}
                    viewCount={offer.viewCount}
                    isBookmarked={bookmarkSet.has(offer.id)}
                    isClosed={offer.isClosed}
                    isRegular={offer.isRegular}
                    onBookmarkClick={() => toggle(offer.id)}
                    style={{
                    width: 250,
                    }}
                />
            ))}
        </>
    );
};
