import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {ExampleComponent} from './App.jsx'
import ExampleComponent2 from './script2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ExampleComponent />
    <ExampleComponent2 />
  </React.StrictMode>,
)
