import Axios from "axios";
import * as turf from "@turf/turf";

function getHeight(dim) {
  if (dim == null) {
    return 0;
  } else {
    return (Number(dim.split("x")[0]) + Number(dim.split("x")[1])) / 5;
  }
}

function getColor(dim) {
  var pdfColors = {
    "Sheikhpur": "#e282ff",
    "Kak": "#82ffe0",

    null: "#ffcd52"
  };
  return pdfColors[dim];
}

export default {
  state: {
    plots: [],
    blockList: [],
    plotList: [],
    dealList:[],
    plotInfo: {},
    dealInfo: {},
    summary: {
      plots: {},
      blocks: {},
      dimensions: {},
      categories: {}
    },
    statusList: [],
    plots3D: []
  },
  getters: {
    getPlots: state => state.plots,
    getBlockList: state => state.blockList,
    getPlotList: state => state.plotList,
    getDealList: state => state.dealList,
    getPlotInfo: state => state.plotInfo,
    getDealInfo: state => state.dealInfo,
    getSummary: state => state.summary,
    getStatusList: state => state.statusList,
    get3DPlots: state => state.plots3D
  },
  mutations: {
    setPlots: (state, payload) => {
      try {
        // console.log("payload:", payload);
        payload.forEach(plot => {
          plot.st_asgeojson = JSON.parse(plot.st_asgeojson);
        });
      } finally {
        state.plots = payload;
        // console.log("plots formatted:", state.plots);
      }
    },
    setBlockList: (state, payload) => (state.blockList = payload),
    setPlotList: (state, payload) => (state.plotList = payload),
    setDealList: (state, payload) => (state.dealList = payload),
    setDealInfo: (state, payload) => (state.dealInfo = payload),
    setPlotInfo: (state, payload) => (state.plotInfo = payload),
    setSummary: (state, payload) => (state.summary = payload),
    setStatusList: (state, payload) => (state.statusList = payload),
    set3DPlots: (state, payload) => {
      // console.log("---payload", payload);
      var data = {
        type: "FeatureCollection",
        features: payload.map(plot => {
          var object_id = plot.object_id;
          var plot_id = plot.plot_id;
          var dimensions = plot.dimensions;
          var st_asgeojson = plot.st_asgeojson;
          var new_id = plot.new_id;
          var new_plot = {
            type: "Feature",
            properties: {
              level: 1,
              base_height: 0,
              object_id: object_id,
              plot_id: plot_id,
              dimensions: dimensions,
              height: getHeight(dimensions),
              color: getColor(dimensions)
            },
            geometry: {
              coordinates: st_asgeojson.coordinates[0],
              type: "Polygon"
            },
            id: new_id
          };
          // { object_id, plot_id, dimensions, st_asgeojson, new_id };
          // console.log(new_plot);
          return new_plot;
        })
      };
      state.plots3D = data;
    }
  },
  actions: {
    fetchPlots(context, payload) {
      context.commit("setSelectedPlot", [], { root: true });
      context.commit("setSnackbar", false, { root: true });
      context.commit("setLoading", true, { root: true });
      var baseUrl = `${payload.url}/khasrafilter?`;
      var params = ``;
      if (payload.params.block != "" && payload.params.block != undefined) {
        params += `block=${payload.params.block}&`;
      }
      if (payload.params.status != "" && payload.params.status != undefined) {
        params += `status=${payload.params.status}&`;
      }
      if (payload.params.type != "" && payload.params.type != undefined) {
        params += `type=${payload.params.type}&`;
      }
      if (
        payload.params.dimensions != "" &&
        payload.params.dimensions != undefined
      ) {
        params += `dimensions=${payload.params.dimensions}&`;
      }
      Axios.post(baseUrl + params)
        .then(Response => {
          context.commit("setPlots", Response.data);
          context.commit("set3DPlots", Response.data);
          var polygons = [];
          Response.data.forEach(polygon => {
            var geojson = JSON.parse(polygon.st_asgeojson);
            var ring = geojson.coordinates[0][0];
            var poly = turf.polygon([ring]);
            polygons.push(poly);
          });
          var centroid = turf.centroid({
            type: "FeatureCollection",
            features: polygons
          });
          setTimeout(() => {
            context.commit(
              "setCenter",
              [
                centroid.geometry.coordinates[1],
                centroid.geometry.coordinates[0]
              ],
              { root: true }
            );
            context.commit("setZoom", 16, { root: true });
            context.commit("setLoading", false, { root: true });
          }, 1000);
        })
        .catch(e => {
          context.commit("setLoading", false, { root: true });
          context.commit("setSnackbarText", `No Results Found! ${e}`, {
            root: true
          });
          context.commit("setSnackbar", true, { root: true });
        });
    },

    fetchBlockList(context, payload) {
      Axios.get(`${payload.url}/mozalist`)
        .then(Response => {
          context.commit("setBlockList", Response.data.sort());
        })
        .catch();
    },

    fetchDealList(context, payload) {
      context.commit("setSnackbar", false, { root: true });
      context.commit("setLoading", true, { root: true });
      context.commit("setSelectedDeal", [], { root: true });                       /*Test setSelectedPlot*/
      Axios.get(`${payload.url}/mozawisedealno?moza_name=${payload.block}`) 
      // console.log(payload.block)                                                   /* ${payload.block}  */
        .then(Response => {
          context.commit("setDealList", Response.data.deal_no.sort());                     /*Test Response.data.plots*/
          setTimeout(() => {
            context.commit("setLoading", false, { root: true });
          }, 3000);
        })
        .catch(e => {
          context.commit("setLoading", false, { root: true });
          context.commit("setSnackbarText", `No Results Found! ${e}`, {
            root: true
          });
          context.commit("setSnackbar", true, { root: true });
        });
    },

    fetchPlotList(context, payload) {
      context.commit("setSnackbar", false, { root: true });
      context.commit("setLoading", true, { root: true });
      context.commit("setSelectedPlot", [], { root: true });
      Axios.post(`${payload.url}/searchkhasra?block_name=${payload.block}`)
        .then(Response => {
          context.commit("setPlotList", Response.data.plots);
          // console.log(Response.data.plots)
          setTimeout(() => {
            context.commit("setLoading", false, { root: true });
          }, 3000);
        })
        .catch(e => {
          context.commit("setLoading", false, { root: true });
          context.commit("setSnackbarText", `No Results Found! ${e}`, {
            root: true
          });
          context.commit("setSnackbar", true, { root: true });
        });
    },

    



    fetchTowerInfo(context, payload) {
      context.commit("setSnackbar", false, { root: true });
      context.commit("setLoading", true, { root: true });
      context.commit("setPlotInfo", {});
    //   context.commit(
    //     "setCenter",
    //     [
    //       payload.url.geometry.coordinates[1],
    //       payload.url.geometry.coordinates[0]
    //     ],
    //     { root: true }
    //   );
    //   context.commit("setPlotInfo", payload.url);
    //   context.commit(
    //     "setSelectedPlot",
    //     [ 
    //       payload.url.geometry.coordinates[1],
    //       payload.url.geometry.coordinates[0]
    //     ],
    //     { root: true }
    //   );
    //   setTimeout(() => {
    //     context.commit("setZoom", 18, { root: true });
    //     context.commit("setPlotInfoSkeleton", false, { root: true });
    //     context.commit("setLoading", false, { root: true });
    //   }, 1000);
    // },
      Axios.get(`${payload.url}/khasradetail/${payload.id}`)
        .then(Response => {
          var geojson = JSON.parse(Response.data.st_asgeojson);
          var ring = geojson.coordinates[0][0];
          var poly = turf.polygon([ring]);
          var centroid = turf.centroid(poly);
          context.commit(
            "setCenter",
            [
              centroid.geometry.coordinates[1],
              centroid.geometry.coordinates[0]
            ],
            { root: true }
          );
          context.commit("setPlotInfo",Response.data);
          // console.log(this.map.Society.features.Status)
          context.commit(
            "setSelectedPlot",
            [
              centroid.geometry.coordinates[1],
              centroid.geometry.coordinates[0]
            ],
            { root: true }
          );
          setTimeout(() => {
            context.commit("setZoom", 18, { root: true });
            context.commit("setPlotInfoSkeleton", false, { root: true });
            context.commit("setLoading", false, { root: true });
          }, 1000);
        })
        .catch(e => {
          context.commit("setLoading", false, { root: true });
          context.commit("setInfoDialog", false, { root: true });
          context.commit("setSnackbarText", `No Information Found ${e}`, {
            root: true
          });
          context.commit("setSnackbar", true, { root: true });
        });
    },



    // fetchDealInfo(context, payload) {
    //   context.commit("setSnackbar", false, { root: true });
    //   context.commit("setLoading", true, { root: true });
    //   context.commit("setDealInfo", {});
    //   Axios.get(`${payload.url}/dealnodetail/${payload.id}`)   /* is payload.id is new_id */
    //     .then(Response => {
    //       var geojson = JSON.parse(Response.data.st_asgeojson);
    //       var ring = geojson.coordinates[0][0];
    //       var poly = turf.polygon([ring]);
    //       var centroid = turf.centroid(poly);
    //       context.commit(
    //         "setCenter",    /* Search */
    //         [
    //           centroid.geometry.coordinates[1],
    //           centroid.geometry.coordinates[0]
    //         ],
    //         { root: true }
    //       );
    //       context.commit("setDealInfo", Response.data);
    //       context.commit(
    //         "setSelectedDeal",  /* Search */
    //         [
    //           centroid.geometry.coordinates[1],
    //           centroid.geometry.coordinates[0]
    //         ],
    //         { root: true }
    //       );
    //       setTimeout(() => {
    //         context.commit("setZoom", 18, { root: true });
    //         context.commit("setPlotInfoSkeleton", false, { root: true });
    //         context.commit("setLoading", false, { root: true });
    //       }, 1000);
    //     })
    //     .catch(e => {
    //       context.commit("setLoading", false, { root: true });
    //       context.commit("setInfoDialog", false, { root: true });
    //       context.commit("setSnackbarText", `No Information Found ${e}`, {
    //         root: true
    //       });
    //       context.commit("setSnackbar", true, { root: true });
    //     });
    // },




    fetchSummary(context, payload) {
      Axios.get(`${payload.url}/khasrasummary`).then(Response => {
        context.commit("setSummary", Response.data);
      });
    },

    fetchStatusList(context, payload) {
      Axios.get(`${payload.url}/statuslist`).then(Response => {
        context.commit("setStatusList", Response.data);
      });
    }
  }
};
