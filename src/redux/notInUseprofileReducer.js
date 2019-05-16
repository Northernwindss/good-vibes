
// const initialState = {
//   profilePicture: '',
//   profileName: '',
//   profileBio: ''
// }

// const UPDATE_PROFILE_PICTURE = 'PROFILE_PICTURE'
// const UPDATE_PROFILE_NAME = 'PROFILE_NAME'
// const UPDATE_PROFILE_BIO = 'PROFILE_BIO'

// export function updateProfilePicture(obj1) {
//   return {
//     type: UPDATE_PROFILE_PICTURE,
//     payload: obj1
//   }
// }

// export function updateProfileName(obj2) {
//   return {
//     type: UPDATE_PROFILE_NAME,
//     payload: obj2
//   }
// }

// export function updateProfileBio(obj3) {
//   return {
//     type: UPDATE_PROFILE_BIO,
//     payload: obj3
//   }
// }

// export default function profileReducer(state = initialState, action) {
//   const { type, payload } = action
//   console.log('prof reducer', type, payload)
//   switch (type) {
//     case UPDATE_PROFILE_PICTURE:
//       return {
//         ...state, profilePicture: payload
//       }
//     case UPDATE_PROFILE_NAME:
//       return {
//         ...state, profileName: payload
//       }
//     case UPDATE_PROFILE_BIO:
//       return {
//         ...state, profileBio: payload
//       }
//     default:
//       return state
//   }

// }
