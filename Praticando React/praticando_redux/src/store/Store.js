import { createStore } from "redux";

import rootReducer from "../store/modules/RootModules";

const store = createStore(rootReducer);

export default store;
