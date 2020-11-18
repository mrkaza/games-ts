interface NavbarFalse {
  type: "NAVBAR_FALSE";
  payload: boolean;
}
interface NavbarTrue {
  type: "NAVBAR_TRUE";
  payload: boolean;
}

export type NavDispatchTypes = NavbarFalse | NavbarTrue;
