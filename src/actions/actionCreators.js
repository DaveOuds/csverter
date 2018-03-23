//add data to defaultState
export function add_data(obj){
  console.log(obj);
  return{
    type: "ADD_DATA",
    payload: obj
  }
}
