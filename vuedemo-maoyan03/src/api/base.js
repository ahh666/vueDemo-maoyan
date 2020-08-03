import axios from 'axios'
import { PATH } from './config'

export class BaseApi {
  constructor() {
    this.hanlder = axios.create()
    this.hanlder.defaults.baseURL = PATH.maoyanPath
  }

  _transfromResponse(res) {
    const { data, status } = res
    if (status === 200) {
      return data
    }
    return res
  }

  get(url, config = {}) {
    const params = config.params || {}
    config = {
      ...config,
      params: {
        token: '',
        optimus_uuid: 'D5270AD0BD1511EA97EEB3F29AAFC0985406D52C78BB4E3A9378934129A15D03',
        optimus_risk_level: 71,
        optimus_code: 10,
        ...params
      }
    }
    return this.hanlder.get(url, config).then(this._transfromResponse)
  }

  post(url, data, config) {
    return this.handler.post(url, data, config).then(this._transfromResponse)
  }
}
