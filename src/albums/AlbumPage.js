import { Component } from 'react';
import AlbumList from './AlbumList';
import './AlbumPage.css';

export default class AlbumPage extends Component {
  state = {
    albums: []
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