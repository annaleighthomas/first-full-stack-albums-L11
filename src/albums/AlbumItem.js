import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AlbumItem.css';

class AlbumItem extends Component {

  render() {
    const album = this.props.album;

    return (
      <li className="AlbumItem">
        <Link to={`/albums/${album.id}`}>
          <h2>{album.band}</h2>
          <img src={album.img} alt={album.album}/>
          <p>{album.album}</p>
        </Link>
      </li>
    );
  }
}

export default AlbumItem;
