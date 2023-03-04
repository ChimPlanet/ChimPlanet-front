import { atom } from "recoil";

export const PostSort = atom({
    key: 'PostSort', 
    default: [
        {key: 1, isClicked: 1, text: '구인중'},
        {key: 2, isClicked: 0, text: '모집마감'},
        {key: 3, isClicked: 0, text: '전체'},
    ], 
});

export const ListSort = atom({
    key: 'ListSort', 
    default: ''
})
