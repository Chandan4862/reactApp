function contacts(state = [], action) {
  if (action.type === "ADD") {
    let obj = state.map((x) => x);
    obj.push(action.payload);
    return obj;
  }
  return state;
}

export default contacts;
