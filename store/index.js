export const state = () => ({
  theme: false,
});

export const getters = {
  getTheme(state) {
    return state.theme;
  },
};

export const mutations = {
  changeTheme(state, value) {
    console.log('state',state, 'value', value)
    return state.theme
  },
};

export const actions = {
 
  changeTheme1({ state }) {
    console.log(state.theme);
    state.theme = !state.theme;
  }
};
