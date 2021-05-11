import { Component } from 'react';
import AlbumForm from '../common/AlbumForm';
import { addAlbum } from '../utils/albums-api';
import './AlbumEditPage.css';

export default class AlbumEditPage extends Component {
  state = {
    error: null
  }

  handleEdit = async album => {
    try {
      const id = await addAlbum(album);
      console.log(id);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
  }

  render() {
    return (
      <div className="AlbumEditPage">
        <h2>Add An Album</h2>
        <AlbumForm onEdit={this.handleEdit}/>
      </div>
    );
  }
}