import API from './API';

export default {
  list: token => {
    const api = new API(token);
    return api.get('/rebels');
  },
  add: (token, form) => {
    const api = new API(token);
    return api.post('/rebels', form);
  },
};