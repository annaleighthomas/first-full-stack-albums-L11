import { Component } from 'react';
import AlbumForm from '../common/AlbumForm';
import { updateAlbum, getAlbum } from '../utils/albums-api';
import './AlbumEditPage.css';

export default class AlbumEditPage extends Component {
  state = {
    album: null,
    loading: false
  }

  async componentDidMount() {
    const { match } = this.props;

    const album = await getAlbum(match.params.id);
    if (album) {
      this.setState({ album: album });
    }
    else {
      console.log('No album received. Check id and network tab');
    }
  }

  handleEdit = async album => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      await updateAlbum(album);
      history.push(`/albums/${album.id}`);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { album } = this.state;
    if (!album) return null;

    return (
      <div className="AlbumEditPage">
        <h2>Edit {album.band}</h2>
        <AlbumForm albumName={album} onSubmit={this.handleEdit}/>
      </div>
    );
  }
}
