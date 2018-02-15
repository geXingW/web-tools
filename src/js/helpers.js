import {router} from '@/router'
import Store from 'js/store'
import Http from 'js/http'
import {ErrDB} from 'js/db'
import moment from 'moment'

export const isOnline = _ => Store.getters.isOnline

export function errObj (msg, path) {
  return {
    datetime: moment().unix(),
    err_body: msg,
    path: path
  }
}

export const xhrReport = err => {
  Http.post('/err-report', err)
    .then(resp => {
      // nothing
    })
    .catch(error => {
      // 记录xhr 错误
      if (error.response) {
        let errInfo = {msg: error.response.data, 'code': error.response.status}
        let xhrErr = errObj(errInfo, '/err-report')
        DBReport(xhrErr)
      }
      // 记录操作错误
      DBReport(err)
    })
}

export const DBReport = err => {
  let errors = []
  ErrDB.getItem('errors').then(val => {
    if (val) {
      errors = val
    }
    errors.push(err)
    ErrDB.setItem('errors', errors)
  })
}

export const eRep = err => {
  let errObj = {
    datetime: moment().unix(),
    err_body: err,
    path: router.currentRoute.path
  }
  if (isOnline()) {
    xhrReport(errObj)
  } else {
    DBReport(errObj)
  }
}
