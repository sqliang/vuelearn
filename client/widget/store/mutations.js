export default {
    updateName(state) {
        let temp = Math.random()*10;
         state.name = state.name + temp;
    }
};