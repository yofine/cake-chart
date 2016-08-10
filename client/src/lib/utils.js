export function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
      const handler = handlers[action.type];
      if (!handler) {
            return state;
          }
      return handler(state, action);
    };
}

export function parseJSON(response) {
  return response.json()
}

export function checkResponseData(response) {
  if(response.code || (response.message && !response.id)) {
    let msg = null
    if(typeof(response.message) === 'string') {
      msg = response.message
    }
    if(_.isArray(response.message)) {
      const {message, path} = response.message[0]
      msg = message
      if(path)
        msg = `${path}: ${message}`;
    }
    var error = new Error(msg)
    throw error
  }
  return response;
}

