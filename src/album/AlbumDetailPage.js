import { Component } from 'react';
import { getAlbum } from '../utils/albums-api';
import './AlbumDetailPage.css';

export default class AlbumsDetailPage extends Component {
  state = {
    album: null
  }
  
  async componentDidMount() {
    const { match } = this.props;
    const album = await getAlbum(match.params.id);
    console.log('album', album);
    if (album) {
      this.setState({ album: album });
    }
    else {
      console.log('No album received! Check id and network tab');
    }
  }

  render() {
    const { album } = this.state;

    if (!album) return null;

    return (
      <div className="AlbumDetail">
        <h2>Album Detail Page</h2>

        <p>Band: {album.band}</p>
        <p>Album: {album.album}</p>
        <p>Year Released: {album.year}</p>
        <p>Owner: {album.userName}</p>

      </div>
    );
  }
}