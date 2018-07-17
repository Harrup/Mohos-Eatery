import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6 quote-info">
            <h5 class="quote-title">Our Story</h5>
            <h2>Cooking Is The Art Of <br />Adjustment</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div class="quote"><strong>Thomas Eggsy</strong> - <em>Master chef at Le Grande Maison</em></div>
            <a href="#" class="reserve-btn">Reservation</a>
          </div>
          <div class="col-md-6">
            <div class="img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
