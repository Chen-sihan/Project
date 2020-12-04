//定义多个可以间接更改state数据的方法  通过commit去触发mutations里面的方法

import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-types'

import { reqAddress, reqCategorys, reqShops } from '../api/index'

export default {
    async getAddress({ commit, state }) {
        let geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        if (result.code === 0) commit(RECEIVE_ADDRESS, { address: result.data })
    },
    async getCategorys({ commit }) {
        const result = await reqCategorys()
        if (result.code === 0) commit(RECEIVE_CATEGORYS, { categorys: result.data })
    },
    async getShops({ commit, state }) {
        let { latitude, longitude } = { state }
        const result = await reqShops({ latitude, longitude })
        if (result.code === 0) commit(RECEIVE_SHOPS, { shops: result.data })
    }
}