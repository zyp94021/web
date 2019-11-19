const defaultState = {
  title: 'Hello Redux',
  data: {
    message: 'client data',
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    
    default:
      return state
  }
}
