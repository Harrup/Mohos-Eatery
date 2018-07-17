import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs">
      <div class="container">
        <h5 class="contact-title">Contact Us</h5>
        <h2 class="title">We are always ready to help</h2>
        <div class="box">
          <div class="row">
            <div class="col-md-6 address">
              <div class="city">Ottawa, <span>Ontario</span></div>
              <p>3000 Dalhousie Street <br /> K1N 8X2 <br />Ottawa, Ontario</p>
              <p><strong>Email:</strong><a href="mailto:info@lagrandemaison.com">info@lagrandemaison.com</a></p>
            </div>
            <div class="col-md-6 contact">
              <h5 class="call">Call directly:</h5>
              <h1>{state.globalState.companyInfo.phoneNumber}</h1>
              <h5>Lunch Service:</h5>
              <p>Friday, Saturday and Sunday Bookings:<br />From 12pm to 1:30pm</p>
              <h5>Dinner Service:</h5>
              <p>Daily Bookings: From 12pm to 1:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
