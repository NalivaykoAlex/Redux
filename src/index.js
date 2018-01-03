import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import reducer from './reducers'
import Track from './Track'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}/>
      <Route path='/tracks/:id' component={Track}/>
    </Router>
  </Provider>,
document.getElementById('root'))
registerServiceWorker();


// function playlist( state = [], action ) {
//   if (action.type === 'ADD_TRACK'){
//   return [
//     ...state,
//     action.payload
//   ]
//  }
//   return state
// }

// const store = createStore(playlist)

// const AddTrackBtn = document.querySelectorAll('.addTrack')[0]
// const trackInput = document.querySelectorAll('.trackInput')[0]
// const list = document.querySelectorAll('.list')[0]

// store.subscribe(() => {
//   console.log('Изменения Store', store.getState())
//   list.innerHTML = ''
//   trackInput.value = ''
//   store.getState().forEach(track => {
//     const li = document.createElement('li')
//     li.textContent = track
//     list.appendChild(li)
//   })
// })

// store.dispatch({ type:'ADD_TRACK', payload:'Happy new year'})
// store.dispatch({ type:'ADD_TRACK', payload:'2018 year'})

// AddTrackBtn.addEventListener('click', () => {
//   const TrackName = trackInput.value
//   store.dispatch({ type:'ADD_TRACK', payload:TrackName})
// })