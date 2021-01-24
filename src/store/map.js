export default {
  state: {
    map: {},
    mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    zoom: 11,
    center: [33.648395, 73.230144],
    labels: false,
    selectedPlot: [],
    selectedDeal: []
  },
  getters: {
    getMap: state => state.map,
    getMapUrl: state => state.mapUrl,
    getZoom: state => state.zoom,
    getCenter: state => state.center,
    getLabels: state => state.labels,
    getSelectedPlot: state => state.selectedPlot,
    getSelectedDeal: state => state.selectedDeal 
  },
  mutations: {
    setMap: (state, payload) => (state.map = payload),
    setZoom: (state, payload) => (state.zoom = payload),
    setCenter: (state, payload) => (state.center = payload),
    setLabels: (state, payload) => (state.labels = payload),
    setSelectedPlot: (state, payload) => (state.selectedPlot = payload),
    setSelectedDeal: (state, payload) => (state.selectedDeal = payload)
  },
  actions: {
    //
  }
};