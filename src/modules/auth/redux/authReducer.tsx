export type UserType = {
  user: { uid: string };
};

type InitState = {
  user: null | UserType;
};

const initState: InitState = {
  user: null,
};

export const authReducer = (state: InitState = initState, action: any) => {
  switch (action.type) {
    case "GOOGLE_SIGN_IN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
