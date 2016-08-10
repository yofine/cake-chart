import HttpClient from '../lib/httpClient'

export function fetch() {
  return (dispatch, state) => {
    dispatch(fetchRequest)
    return HttpClient.get('/api_v1/teams/1/employees?includes=user&access_token=7c33d1a299767328b97affa0b32dd1dde0b1237a')
    .then(response => {
      dispatch(fetchSuccess(response))
    })
    .catch(error => {
      dispatch(fetchFailure(error))
    })
  }
}

function fetchRequest() {
  return {
    type: 'FETCH_MEMBER_REQUEST'
  }
}

function fetchSuccess(data) {
  return {
    type: 'FETCH_MEMBER_SUCCESS',
    payload: {
      data: data
    }
  }
}

export function fetchFailure(error) {
  return {
    type: 'FETCH_MEMBER_FAILURE',
    payload: {
      error: error.response
    }
  }
}
