import './App.css'
import { CodePlayground } from './CodePlayground';

function App() {

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ color: '#419284' }}>Tiny Code Lab</h1>
      <CodePlayground
        html="<h1>Hello</h1>"
        css="h1 { color: blue; }"
        js="console.log('Hello from JS!');"
      />
    </div>
  )
}

export default App
