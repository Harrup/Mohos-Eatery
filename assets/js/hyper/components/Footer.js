import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <section id="Footer">
      <div class="container">
        <div class="links">
          <a href="#">Our Story</a>
          <a href="#">Reviews</a>
          <a href="#">Special Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="icons">
          <a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
          <a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a>
          <a href="https://plus.google.com"><i class="fa fa-google-plus"></i></a>
        </div>
        <p> © Moho's Eatery 2019</p>
        <p>Built By Harrup. All rights reserved</p>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
