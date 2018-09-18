// import Example from "./views/Example/Example.middleware";

const middlewares = {
//  ...Example,
};

export default (store, next, action) => {

  let middleware = middlewares[action.type];

  if (middleware) {
    middleware(store, next, action);
  }

  next(action);
}
