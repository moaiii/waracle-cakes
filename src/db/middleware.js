import Global from './global/global.middleware';
import CakeDetail from '../ui/views/CakeDetail/CakeDetail.middleware';
import CreateNewCake from '../ui/views/CreateNewCake/CreateNewCake.middleware';

const middlewares = {
  ...Global,
  ...CakeDetail,
  ...CreateNewCake
};

export default (store, next, action) => {

  let middleware = middlewares[action.type];

  if (middleware) {
    middleware(store, next, action);
  }

  next(action);
}