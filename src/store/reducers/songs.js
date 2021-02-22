const initialState = [
    'smell like spirit',
    'Sandness Man',
  ];

const songs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRACK':
    return [
        ...state,
        action.payload,
      ];
    break;

    default:
    return [...state];
  };
};

export default songs;
