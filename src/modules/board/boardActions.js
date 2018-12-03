export const NEW_BUBBLES_LIST = 'NEW_BUBBLES_LIST'
export const RESTART_BUBBLES = 'RESTART_BUBBLES'

export const spamBubbles = bubbles => ({
  type: NEW_BUBBLES_LIST,
  payload: bubbles
})

export const collectBubble = bubble => {
  return (dispatch, getstate) => {
    let { bubblesList } = getstate()
    let bubbleIndex = bubblesList.indexOf(bubble)
    bubblesList.splice(bubbleIndex, 1)
    dispatch(spamBubbles([...bubblesList]))
  }
}

export const restartBubbles = () => ({
  type: RESTART_BUBBLES
})