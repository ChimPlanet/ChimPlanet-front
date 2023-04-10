
import { ModalState } from '@/atoms/ContentManagement';
import { useSetRecoilState } from "recoil";
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';
import ContentJobOffer from "./ContentJobOffer";

export default function ContentMapJobOffer({jobs}){

    const sort = useSetRecoilState(ModalState);

    const { toggle } = useBookmark();
    const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

    const onSort = (offer) => {
        sort(offer);
    };

    return(
        <>
            {jobs?.map(offer => (
                <ContentJobOffer 
                    onClick={()=>onSort(offer.data)}
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
