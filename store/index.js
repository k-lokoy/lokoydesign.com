export const state = () => ({
  language: "no"
})

export const mutations = {
  toggle: function(state) {
    state.language = state.language == "no" ? "en" : "no"
  }
}