export const state = () => {};

export const getters = {};

export const mutations = {};

export const actions = {
	getList(context) {
    // const url = '/sample-data/patients.json';
    const url = (process.env.NODE_ENV === 'production') ? '/sample-data/patients.json' : '/api/patients';
    return $nuxt.$axios.get(url);
	},
}

