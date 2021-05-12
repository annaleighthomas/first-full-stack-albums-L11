import { Component } from 'react';
import AlbumForm from '../common/AlbumForm';
import Loader from '../common/Loader';
import { addAlbum } from '../utils/albums-api';
import './AlbumAddPage.css';

export default class AlbumAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async album => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newAlbum = await addAlbum(album);
      history.push(`/albums/${newAlbum.id}`);
      console.log(newAlbum);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  

  render() {  
    const { loading } = this.state;

    return (
      <div className="AlbumAddPage">
        <Loader loading={loading}/>

        <h2>Add an Album</h2>
        <AlbumForm onSubmit={this.handleAdd}/>
  
      </div>
    );
  }
}
