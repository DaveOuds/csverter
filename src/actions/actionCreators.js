export function add_data(cl){
  const obj = {
      firstName   : cl[0],
      lastName    : cl[1],
      email       : cl[2],
      company     : cl[3],
      position    : cl[4].replace(/"/g,""),
      connectedOn : cl[5].replace(/"/g,""),
      notes :[],
      tags :[]
  }

  return{
    type: "ADD_DATA",
    payload: obj
  }
}

//Profile actions
export function add_note(profile){
  return{
    type: "ADD_NOTE",
    profile
  }
}

export function add_tag(profile){
  return{
    type: "ADD_TAG",
    profile
  }
}
export function remove_tag(profile){
  return{
    type: "REMOVE_TAG",
    profile
  }
}

//Tags actions

export function create_tag(tag, key){
    return{
      type: "CREATE_TAG",
      tag,
      key
    }
}

export function delete_tag(i){
  return{
    type: "DELETE_TAG",
    i
  }
}
