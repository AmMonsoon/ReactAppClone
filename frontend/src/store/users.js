


const LOAD = 'user/LOAD'
const LOAD_ONE = 'user/LOAD_ONE'
// const LOAD_ALBUMS = 'user/LOAD_ALBUMS'
// const ADD_IMAGE = 'user/ADD_IMAGE'
// const ADD_ALBUM = 'user/ADD_ALBUM'

const load = list => ({
    type:LOAD,
    list,
}) 

const loadUser = user => ({
    type: LOAD_ONE,
    user
})
// const loadAlbums = album => ({
//     type: LOAD_ALBUMS,
//     album
// })

// const addImage = image => {
//     type: ADD_IMAGE,
//     image
// }

// const addOneAlbum = album => ({
// type: ADD_ALBUM,
// album
// });


//get all the albums of a specific user 

// export const getAlbum = () => async dispatch => {
//     const response = await fetch('/api/users/:id/albums');

//     if(response.ok) {
//         const userAlbum = await response.json();
//         dispatch(load(userAlbum))
//     }
// }


//get a list of all users
export const getUsers = () => async dispatch => {
    const response = await fetch(`/api/users`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

//get a specfic user
export const getOneUser = userId => async dispatch => {
    console.log(userId)
    const response = await fetch(`/api/users/${userId}`)
    

    if (response.ok){
        const user = await response.json();
        dispatch(loadUser(user));
    }
}

// export const getUserId = (userId) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}`)
  
//     if(response.ok){
//       const list = await response.json();
//       dispatch(LOAD(list));
//     }
//   }


  const userReducer = (state = {}, action) => {
      switch(action.type){
          case LOAD: {
              const allUsers = {};
              action.list.forEach(user => {
                  allUsers[user.id] = user;
              })
              return {
                  ...allUsers,
                  ...state
              };
          }
          case LOAD_ONE:{
              const oneUser = {}
              console.log(action.user)
             action.user.forEach(user => {
                 oneUser[user.id] = user;
             })
              return{
                  ...oneUser,
                  ...state, 
              }
          }
          default:
              return state;
      }
  }

  export default userReducer;