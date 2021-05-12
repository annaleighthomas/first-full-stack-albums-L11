import request from 'superagent';

// const URL = '/api/albums';

const URL = 'https://powerful-fjord-09218.herokuapp.com/api/albums';

export async function getAlbums() {
  const response = await request.get(URL);
  return response.body;
}

export async function getAlbum(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addAlbum(album) {
  const response = await request.post(URL).send(album);
  return response.body;
}

export async function deleteAlbum(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateAlbum(album) {
  const response = await request.put(`${URL}/${album.id}`).send(album);
  return response.body;
}