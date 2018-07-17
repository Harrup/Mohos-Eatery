import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {

  var loopMenu = function(){
    return state.globalState.specialMenu.map(function(item){
      return(
        <div class="col-md-4">
          <div class="box">
            <div class="img" style={{
              background: `url("${item.image}") no-repeat center center`, backgroundSize:'cover'
            }}>
              <div class="price-circle">${item.price}</div>
            </div>
            <div class="details">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <section id="SpecialMenu">
      <div class="container">
        <h5 class="special-title">Special Menu</h5>
        <h2>Delicious Flavour Of Autumn</h2>
        <div class="row">
          {loopMenu()}
        </div>
        <a href="#" class="full-menu">View Full Menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
