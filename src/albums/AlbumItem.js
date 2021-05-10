import React, { Component } from 'react';
import './AlbumItem.css';

class AlbumItem extends Component {

  render() {
    const album = this.props.album;

    return (
      <li className="AlbumItem">
        <h2>{album.band}</h2>
        <img src={album.img} alt={album.album}/>
        <p>{album.album}</p>
      </li>
    );
  }
}

export default AlbumItem;