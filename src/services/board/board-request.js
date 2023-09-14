/**
 * @typedef {{articleId: string, boardTags: [{childTagId: string, parentTagId: string}], isEnd: string}} updateBoardRequest
 *
 * @param {{articleId: string, boardTags: [{childTagId: string, parentTagId: string}], isEnd: string}} values
 * @returns {updateBoardRequest}
 */
export function updateBoardRequest(values) {
    return ({
        articleId: values.articleId,
        boardTags: values.boardTags,
        isEnd: values.isEnd
    })
}
  