import { createContext } from "react";

export const MemberContext = createContext({
  members: [],
  setmembers: () => {},
});
