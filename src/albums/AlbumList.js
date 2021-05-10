import React, { Component } from 'react';
import AlbumItem from './AlbumItem';
import './AlbumList.css';


class AlbumList extends Component {

  render() {
    const { albums } = this.props
    
    return (
      <ul className="AlbumList">
        {albums.map(album => (
          <AlbumItem key={album.id} album={album}/>
        ))}
      </ul>
    );
  }
}

export default AlbumList;
