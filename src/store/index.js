import Vue from "vue";
import Vuex from "vuex";
import Plots from "./plots";
import MapObject from "./map";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    darkTheme: true,
    leftDrawer: true,
    rightDrawer: true,
    infoDialog: false,
    snackbar: false,
    snackbarText: "",
    snackbarColor: "red",
    plotInfoSkeleton: true,
    layerstatus:true
  },
  getters: {
    getLoading: state => state.loading,
    getTheme: state => state.darkTheme,
    getLeftDrawer: state => state.leftDrawer,
    getRightDrawer: state => state.rightDrawer,
    getInfoDialog: state => state.infoDialog,
    getSnackbar: state => state.snackbar,
    getSnackbarText: state => state.snackbarText,
    getSnackbarColor: state => state.snackbarColor,
    getPlotInfoSkeleton: state => state.plotInfoSkeleton,
    getLayerVisibility: state =>state.layerstatus
  },
  mutations: {
    setLoading: (state, payload) => (state.loading = payload),
    setTheme: (state, payload) => (state.darkTheme = payload),
    setLeftDrawer: (state, payload) => (state.leftDrawer = payload),
    setRightDrawer: (state, payload) => (state.rightDrawer = payload),
    setInfoDialog: (state, payload) => (state.infoDialog = payload),
    setSnackbar: (state, payload) => (state.snackbar = payload),
    setSnackbarText: (state, payload) => (state.snackbarText = payload),
    setSnackbarColor: (state, payload) => (state.snackbarColor = payload),
    setPlotInfoSkeleton: (state, payload) => (state.plotInfoSkeleton = payload),
    setLayerVisibility:(state,payload)=>(state.layerstatus=payload)
  },
  actions: {},
  modules: {
    plots: Plots,
    map: MapObject
  }
});
