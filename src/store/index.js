import { createStore } from 'vuex';

export default createStore({
	state: {
		modalShow: false,
	},
	getters: {
		authModalShow: (state) => state.modalShow,
	},
	mutations: {
		toggleModal: (state) => {
			state.modalShow = !state.modalShow;
			console.log(state.modalShow);
		},
		closeModal: (state) => {
			state.modalShow = !state.modalShow;
		},
	},
	actions: {
	},
	modules: {
	},
});
