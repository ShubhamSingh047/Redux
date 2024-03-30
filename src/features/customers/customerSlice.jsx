const intiatStateCustomer = {
  fullName: "",
  Id: "",
  createdAt: "",
};

const nameReducer = (state = intiatStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        Id: action.payload.Id,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
};

export default nameReducer;

const createCustomer = (fullName, Id) => {
  //we could have created Id inside reducer function but we should avoid creating side effects inside use reducer
  //reducer should be pure component becouse we have to keep it predicatable
  return {
    type: "customer/createCustomer",
    payload: { fullName, Id, createdAt: new Date().toISOString() },
  };
};

const updatingName = (fullName) => {
  //we could have created Id inside reducer function but we should avoid creating side effects inside use reducer
  //reducer should be pure component becouse we have to keep it predicatable
  return { type: "customer/updateName", payload: fullName };
};

export { updatingName, createCustomer };
