import { Component } from 'react';
import AlbumList from './AlbumList';
import Loader from '../common/Loader';
import { getAlbums } from '../utils/albums-api';
import './AlbumPage.css';

export default class AlbumPage extends Component {
  state = {
    albums: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const albums = await getAlbums();
      this.setState({ albums: albums });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { albums, loading } = this.state;

    return (
      <div className="AlbumsPage">
        <Loader loading={loading}/>

        <h2>My Favorite Albums</h2>

        <AlbumList albums={albums}/>

      </div>
    );
  }
}
