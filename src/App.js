import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './App.css'
import { getTracks } from './actions/tracks'


class App extends Component {

  AddTrack = event => {
    this.props.onAddTrack(this.trackInput.value)
    this.trackInput.value = ''
  }

  findTrack = event => {
    this.props.onFindTrack(this.searchInput.value)
    this.searchInput.value = ''
  }

  render() {
    const { tracks, onGetTracks, location } = this.props
    console.log(location,'HEE')
    return (
      <div>
        <div>
          <input className='input' type="text" ref={input => { this.trackInput = input }} />
          <button className='button' onClick={this.AddTrack}>Добавить</button>
        </div>
        <div>
          <input className='input' type="text" ref={input => { this.searchInput = input }} />
          <button className='button' onClick={this.findTrack}>Поиск</button>
        </div>
        <div>
          <button onClick={onGetTracks}>Получить записи</button>
        </div>
        <ul>
          {tracks.map(item =>
            <li key={item.id}>
            <Link to={`/tracks/${item.id}`}>{item.name}</Link>
             </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    tracks:state.tracks.filter( track => track.name.includes(state.filterTracks)),
    playlist:state.playlist
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type:'ADD_TRACK', payload })
    },
    onFindTrack: (name) => {
      dispatch({ type:'FIND_TRACK', payload:name})
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);
