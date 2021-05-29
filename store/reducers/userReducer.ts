const SET_FETCH_DATA = "SET_FETCH_DATA";
const SET_TOKEN = "SET_TOKEN";

type InitialStateType = {
  users: any[];
  token: string;
  loading: boolean;
};

const initialState: InitialStateType = {
  users: [],
  token: "",
  loading: true,
};
export default function mainReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FETCH_DATA:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

export const setFetchData = (payload: any) => ({
  type: SET_FETCH_DATA,
  payload,
});
export const setToken = (payload: any) => ({
  type: SET_TOKEN,
  payload,
});
