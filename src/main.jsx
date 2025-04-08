import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import Redux
import { Provider } from 'react-redux'
import store from './redux/store' // <-- make sure path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap your app here */}
      <App />
    </Provider>
  </React.StrictMode>
)
