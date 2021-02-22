import addTrack from '../../store/actions/addTrack';
import {
  connect,
} from 'react-redux';

import TextInput from '../TextInput/TextInput';

function App({
  songs,
  addTrack,
}) {
  console.log('songs', songs);

  return (
    <div>
      <TextInput />
      <button onClick={() => addTrack('mr trololo')}>Add track</button>
      <ul>
        {
          songs.map((track, index) => 
          <li key={index}>{track}</li>)
        }
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    songs: state.songs,
  }),
  addTrack
)(App);
