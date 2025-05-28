import './App.css'
import { CodePlayground } from './CodePlayground';

function App() {

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ color: '#419284' }}>Tiny Code Lab</h1>
      <CodePlayground
        html="<h1>Welcome to Tiny Code Lab</h1><p>Edit the code and see changes instantly!</p>"
        css="h1 { color: darkblue; } p { font-style: italic; }"
        js="console.log('Hello from the JS tab!');"
      />
    </div>
  )
}

export default App
