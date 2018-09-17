import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'
import './css/global.css'
import './css/roboto-fontface.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
