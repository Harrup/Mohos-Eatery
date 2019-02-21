import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header class="header">
      <div class="container">
        <div class="logo">MOHOS</div>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Party Platter</a>
          <a href="#">Locations</a>
          <a href="#">Rewards</a>
          <a href="#">Reservations</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
