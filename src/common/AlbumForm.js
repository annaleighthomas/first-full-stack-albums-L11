import { Component } from 'react';
import './AlbumForm.css';

export default class AlbumForm extends Component {
  state = {
    band: 'Quicksand',
    album: 'Slip',
    year: 1993,
    genre: 'Post-Hardcore',
    img: 'https://www.srcvinyl.com/media/catalog/product/cache/9/image/9df78eab33525d08d6e5fb8d27136e95/q/u/quicksand_1.jpg',
    isPlatinum: false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEdit(this.state);
  }

  handleChangeBand = ({ target }) => {
    this.setState({ band: target.value });
  }

  handleChangeAlbum = ({ target }) => {
    this.setState({ album: target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ year: Number(target.value) });
  }

  handleChangeGenre = ({ target }) => {
    this.setState({ genre: target.value });
  }

  handleChangeImg = ({ target }) => {
    this.setState({ img: target.value });
  }

  handleChangeIsPlatinum = ({ target }) => {
    this.setState({ isPlatinum: target.checked });
  }

  render() {
    const { band, album, year, genre, img, isPlatinum } = this.state;

    return (
      <form className="AlbumForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Band Name</span>
            <input name="band" required placeholder="Band Name..."
              value={band} onChange={this.handleChangeBand}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Album Name</span>
            <input name="album" required placeholder="Album Name..."
              value={album} onChange={this.handleChangeAlbum}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Year</span>
            <input name="year" required placeholder="Year released..."
              value={year} onChange={this.handleChangeYear}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Genre</span>
            <input name="genre" required placeholder="Genre..."
              value={genre} onChange={this.handleChangeGenre}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Album Image URL</span>
            <input name="img" required placeholder="URL..."
              value={img} onChange={this.handleChangeImg}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Went Platinum?</span>
            <span className="vertically-centered">
              <input name="isPlatinum"
                type="checkbox"
                value={isPlatinum} onChange={this.handleChangeIsPlatinum} 
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>Add Album</button>
        </p>

      </form>
    );
  }
}