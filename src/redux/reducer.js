
const initialState = {
  user_id: 0,
  username: '',
  authenticated: false,


  profilePicture: '',
  profileName: '',
  profileBio: '',
  // forums
  comment_id: 0,
  thread_id: 0,
  user_forum_name: '',
  comment: '',
}
// for login/register
const UPDATE_USER_ID = 'UPDATE_USER_ID'
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'

// updating profile
const UPDATE_PROFILE_PICTURE = 'PROFILE_PICTURE'
const UPDATE_PROFILE_NAME = 'PROFILE_NAME'
const UPDATE_PROFILE_BIO = 'PROFILE_BIO'

// forums
const UPDATE_COMMENT_ID = 'UPDATE_COMMENT_ID'
const UPDATE_THREAD_ID = 'UPDATE_THREAD_ID'
const UPDATE_USER_FORUM = 'UPDATE_USER_FORUM'
const UPDATE_COMMENT = 'UPDATE_COMMENT'

// login/register
export function updateUserDetails(newUserDetails) {
  return {
    type: UPDATE_USER_DETAILS,
    payload: newUserDetails
  }
}


export function updateProfilePicture(obj1) {
  return {
    type: UPDATE_PROFILE_PICTURE,
    payload: obj1
  }
}

export function updateProfileName(obj2) {
  return {
    type: UPDATE_PROFILE_NAME,
    payload: obj2
  }
}

export function updateProfileBio(obj3) {
  return {
    type: UPDATE_PROFILE_BIO,
    payload: obj3
  }
}



export function updateUserId(id) {
  return {
    type: UPDATE_USER_ID,
    payload: id
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

// forums

export function updateCommentId(id2) {
  return {
    type: UPDATE_COMMENT_ID,
    payload: id2
  }
}

export function updateThreadId(id3) {
  return {
    type: UPDATE_THREAD_ID,
    payload: id3
  }
}

export function updateUserForm(obj4) {
  return {
    type: UPDATE_USER_FORUM,
    payload: obj4
  }
}

export function updateComment(obj5) {
  return {
    type: UPDATE_COMMENT,
    payload: obj5
  }
}


export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    // login/register
    case UPDATE_USER_ID:
      return {
        ...state, user_id: payload, authenticated: true
      }
    case UPDATE_USERNAME:
      return {
        ...state, username: payload
      }
    case UPDATE_USER_DETAILS:
      return {
        ...state, ...payload
      }

    // profile
    case UPDATE_PROFILE_PICTURE:
      return {
        ...state, profilePicture: payload
      }
    case UPDATE_PROFILE_NAME:
      return {
        ...state, profileName: payload
      }
    case UPDATE_PROFILE_BIO:
      return {
        ...state, profileBio: payload
      }


    // forums
    case UPDATE_COMMENT_ID:
      return {
        ...state, comment_id: payload
      }
    case UPDATE_THREAD_ID:
      return {
        ...state, thread_id: payload
      }
    case UPDATE_USER_FORUM:
      return {
        ...state, user_forum_name: payload
      }
    case UPDATE_COMMENT:
      return {
        ...state, comment: payload
      }

    default:
      return state
  }

}
