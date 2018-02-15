import LocalForage from 'localforage'

const DBPrefix = 'TOOLS_'
const DB_LIST = {
  'APP_TABLE': `${DBPrefix}APP_TABLE`,
  // 错误日志存储地方
  'ERR_TABLE': `${DBPrefix}ERR_TABLE`,
}

export const DB = LocalForage.config({
  name: 'TOOLS_DB',
  storeName: DB_LIST['APP_TABLE'],
  driver: [LocalForage.INDEXEDDB, LocalForage.WEBSQL, LocalForage.LOCALSTORAGE],
})

export const ErrDB = LocalForage.createInstance({
  name: 'TOOLS_DB',
  storeName: DB_LIST['ERR_TABLE'],
  driver: [LocalForage.INDEXEDDB, LocalForage.WEBSQL, LocalForage.LOCALSTORAGE],
})
