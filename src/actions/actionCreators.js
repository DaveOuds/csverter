//add data to defaultState
export function add_data(cl){
  const obj = {
      firstName   : cl[0],
      lastName    : cl[1],
      email       : cl[2],
      company     : cl[3],
      position    : cl[4].replace(/"/g,""),
      connectedOn : cl[5].replace(/"/g,""),
  }

  return{
    type: "ADD_DATA",
    payload: obj
  }
}

export function add_tag(tag, key){
    return{
      type: "ADD_TAG",
      tag,
      key
    }
}

export function remove_tag(i){
  return{
    type: "REMOVE_TAG",
    i
  }
}
