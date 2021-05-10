import { Component } from 'react';
import AlbumList from './AlbumList';
import { getAlbums } from '../utils/albums-api';
import './AlbumPage.css';

export default class AlbumPage extends Component {
  state = {
    albums: []
  }

  async componentDidMount() {
    const albums = await getAlbums();
    if (albums) {
      this.setState({ albums: albums });
    }
    else {
      console.log('No albums found! Check network tab');
    }
  }

  render() {
    const { albums } = this.state;

    return (
      <div className="AlbumsPage">
        <h2>My Favorite Albums</h2>

        <AlbumList albums={albums}/>

      </div>
    );
  }
}
