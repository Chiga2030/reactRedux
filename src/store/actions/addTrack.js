const addTrack = dispatch => ({
  addTrack: trackName => dispatch({
    type: 'ADD_TRACK',
    payload: trackName,
  })
})


export default addTrack;
