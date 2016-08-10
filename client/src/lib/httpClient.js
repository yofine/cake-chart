import { checkResponseData, parseJSON } from './utils'

const HttpClient = {

  get: (path, params) => new Promise((resolve, reject) => {
    fetch(path, {
      headers: {'content-type': 'application/json'}
    })
    .then(parseJSON)
    .then(checkResponseData)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),

  put: (path, payload) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'put',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(payload),
    })
    .then(parseJSON)
    .then(checkResponseData)
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),

  post: (path, payload) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: payload instanceof FormData ? payload : JSON.stringify(payload),
    })
    .then(parseJSON)
    .then(checkResponseData)
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),

  delete: (path) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'delete',
      headers: {'content-type': 'application/json'},
    })
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),
}

export default HttpClient
