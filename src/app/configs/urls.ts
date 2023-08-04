import {environment} from '../../environmets/environment.dev'

const {api_key, API, breeds} = environment;

export const urls = {
  cats: (limit = '', breed = '', order = '') =>
    `${API}/search?limit=${+limit}&breed_ids=${breed}&order=${order}&api_key=${api_key}`,
  breeds: () => breeds,
};
