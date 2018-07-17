var rightReviewClicked = function(state, actions) {
  return (state.globalState.reviewStatus.currentReview = state.globalState.reviewStatus.currentReview + 1)
}

var leftReviewClicked = function(state, actions) {
  return (state.globalState.reviewStatus.currentReview = state.globalState.reviewStatus.currentReview - 1)
}

export const actions = {
  rightReviewClicked,
  leftReviewClicked
}
