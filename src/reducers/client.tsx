const initialState = {
  error: '',
  loading: false,
  clients: []
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CLIENT':
      let { clients } = action;
      return { ...state, clients }

    default:
      return state;
  }
};

export default card;
