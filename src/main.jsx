import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BlogApp } from './BlogApp'



import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BlogApp/>
    </Provider>

  </React.StrictMode>
)
