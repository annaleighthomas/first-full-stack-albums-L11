import { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getAlbum, deleteAlbum } from '../utils/albums-api';
import './AlbumDetailPage.css';

export default class AlbumsDetailPage extends Component {
  state = {
    album: null,
    loading: true
  }
  
  async componentDidMount() {
    const { match } = this.props;
    try {
      const album = await getAlbum(match.params.id);
      this.setState({ album: album });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  

  handleDelete = async () => {
    const { album } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${album.band}?`;
    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteAlbum(album.id);
      history.push('/albums');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }
    
  render() {
    const { album, loading } = this.state;

    if (!album) return null;

    return (
      <div className="AlbumDetailPage">
        <Loader loading={loading}/>

        <h2>{album.band}</h2>

        <img src={album.img} alt={album.album}/>

        <p>Released in: {album.year} </p>
        <p>Genre: {album.genre}</p>

        <Link to={`/albums/${album.id}/edit`}>
          Edit this Album
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete this Album
        </button>
      </div>
    ); 
  }
}