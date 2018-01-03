const api_data = [
    {
      id:1,
      name:'My Way'
    },
    {
      id:2,
      name:'Blue Moon'
    },
    {
      id:3,
      name:'Jingle Bells'
    },
    {
      id:4,
      name:'Let It Snow'
    }

]

export const getTracks = () => dispatch => {
    setTimeout(() => {
      console.log('I got tracks')
      dispatch({ type:'FETCH_TRACKS_SUCCESS', payload: api_data })
    }, 2000)
}