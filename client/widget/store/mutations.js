import { USER_SIGNIN, USER_SIGNOUT, USER_REG, SHOW_PROGRESS, HEAD_LINE } from './types'
export default {
    updateName(state) {
        let temp = Math.random() * 10;
         state.name = state.name + temp;
    },
    [USER_REG](state, token) {
        localStorage.setItem('jwt', token);
        state.token = token;
    },
    [USER_SIGNIN](state, token) {
        localStorage.setItem('jwt', token);
        state.token = token;
    },
    [USER_SIGNOUT](state) {
        localStorage.removeItem('jwt');
        state.token = null;
    },
    [SHOW_PROGRESS](state, number) {
        state.progress = number;
    },
    [HEAD_LINE](state, headline) {
        state.headline = headline;
    }
};