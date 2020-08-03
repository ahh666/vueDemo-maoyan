import {BaseApi} from './base'

class API extends BaseApi {
  getMovieOnInfoList() {
    return this.get('/movieOnInfoList')
  }
  getMostExpected() {
    return this.get('/mostExpected')
  }
  getComingList() {
    return this.get('/comingList')
  }
  getDetailMovie(params) {
    return this.get('/detailmovie', { params })
  }
  getMoreList(params) {
    return this.get('/moreComingList', { params })
  }
  getCities() {
    return this.get('/cities.json', { baseURL: '/dianying' })
  }
  getCinemaList(params) {
    return this.get('/cinemaList', { params })
  }
  search(params) {
    return this.get('/search', { params })
  }
  filterCinemas(params) {
    return this.get('/filterCinemas', { params })
  }
}

export default new API()
