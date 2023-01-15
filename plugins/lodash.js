import get from 'lodash.get';

export default ({ app }, inject) => {
  inject('lodash', { 
    get,
  });
}