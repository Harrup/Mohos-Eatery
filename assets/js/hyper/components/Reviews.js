import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {

  var rightClick = function(){
    if(state.globalState.reviewStatus.currentReview == state.globalState.reviews.length-1){
      console.log("nothing to do")
    }else{
      actions.rightReviewClicked()
    }
  }

  var leftClick = function(){
    if(state.globalState.reviewStatus.currentReview == 0){
      console.log("nothing to do")
    }else{
      actions.leftReviewClicked()
    }
  }

  var currentReview = function(){
    return(
      <div>
        <h2 class="title">{state.globalState.reviews[state.globalState.reviewStatus.currentReview].company}</h2>
        <h5>"{state.globalState.reviews[state.globalState.reviewStatus.currentReview].highlight}"</h5>
        <p>
          {state.globalState.reviews[state.globalState.reviewStatus.currentReview].review}
        </p>
        <div class="quote"><strong>{state.globalState.reviews[state.globalState.reviewStatus.currentReview].author}</strong> - <em>{state.globalState.reviews[state.globalState.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }

  return (
    <section id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img"></div>
          </div>
          <div class="col-md-6 review-info">
            <h5 class="review-title">Review</h5>
            {currentReview()}
            <div class="arrows">
              <i onclick={leftClick} class={`fa fa-arrow-left ${(state.globalState.reviewStatus.currentReview == 0) ? '' :'ready'}`}></i>
              <i onclick={rightClick} class={`fa fa-arrow-right ${(state.globalState.reviewStatus.currentReview == state.globalState.reviews.length-1) ? '' :'ready'}`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
