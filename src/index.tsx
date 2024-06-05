import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
