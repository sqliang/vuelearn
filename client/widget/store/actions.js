import Vue from 'vue';
import api from '../api';
import router from '../routes';
import MsgAlert from './MsgAlert';
import * as types from './types';
export default {
    updateName({commit}) {
        commit('updateName');
    },
    //后台注册
    UserReg({commit}, data) {
        api.localReg(data)
            .then(({data}) => {
                if(data.code === 200) {
                    commit(types.USER_REG, data.token);
                    router.replace({path: '/admin'});
                }
                else {
                    MsgAlert(data.message);
                }
            })
            .catch((error) => {
                MsgAlert(error.toString());
            });
    },
    // 后台登录
    UserLogin({commit}, data) {
        api.localLogin(data)
            .then(({data}) => {
                if (data.code === 200) {
                    commit(types.USER_SIGNIN, data.token);
                    router.replace({path: '/admin/articleList'});
                }
                else {
                    MsgAlert(data.message);
                }
            })
            .catch( error => {
                MsgAlert(error.toString())
            });
    },
    UserLogout({commit}) {
        commit(types.USER_SIGNOUT);
        router.push({path: '/login'});
    },
    showProgress({commit}, number) {
        commit(types.SHOW_PROGRESS, number);
    },
    changeHeadLine({commit}, headline) {
        commit(types.HEAD_LINE, headline);
    }
}