import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: `url("/img/randomquote.jpg")`
    }}>
      <div class="container">
        <h1>"A Good painting is like good cooking; it can be tasted, but not explained."</h1>
        <span> - Mallon - </span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
