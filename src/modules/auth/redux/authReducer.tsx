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
    default:
      return state;
  }
};
