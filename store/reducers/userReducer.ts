const SET_FETCH_USERS_DATA = "SET_FETCH_USERS_DATA ";
export const SET_USERS = "SET_USERS";
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
export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FETCH_USERS_DATA:
      return {
        ...state,
        users: action.payload,
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

export const setFetchUsersData = (payload: any) => ({
  type: SET_FETCH_USERS_DATA,
  payload,
});
export const setUsers = () => ({
  type: SET_USERS,
});
export const setToken = (payload: any) => ({
  type: SET_TOKEN,
  payload,
});
