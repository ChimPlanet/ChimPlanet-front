export const translateJobItem = (jobItem) => {
  return {
    ...jobItem,
    regDate: jobItem.regDate.slice(0, -1),
    endStr: jobItem.endStr === 'END',
    likeCount: parseInt(jobItem.likeCount),
    viewCount: parseInt(jobItem.viewCount),
    boardId: parseInt(jobItem.boardId),
  };
};
