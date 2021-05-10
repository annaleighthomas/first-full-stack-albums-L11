import request from 'superagent';

const URL = '/api/albums';

export async function getAlbums() {
  const response = await request.get(URL);
  return response.body;
}

export async function getAlbum(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}
