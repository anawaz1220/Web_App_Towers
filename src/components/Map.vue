<template>
  
  <l-map
    ref="map"
    style="height: 100%; z-index: 0;"
    :zoom="getZoom"
    :center="getCenter"
    @update:zoom="zoomUpdate"
  >
    

    <l-control position="bottomleft">
      <v-card class="legend">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Legend</h3>
              <template v-slot:actions>
                <v-icon>mdi-chevron-up</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-layout row wrap>
                <v-flex
                  :class="legend.expanded ? `xs12 my-1` : `xs6 my-1`"
                  v-for="legend in colors"
                  :key="legend.name"
                >
                  <v-chip outlined>
                    <v-avatar left>
                      <v-icon :color="legend.color">mdi-circle</v-icon>
                    </v-avatar>
                    {{ legend.name }}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </l-control>

    <l-control 
    z-index=1500 
    position="bottomleft" 
    style=
      "margin-right: 20px; 
      background-color:white; 
      width:320px;
      height: 30px;
      "
    > 
    <v-panel-header  >
    
                <v-slider 
                    max="100"
                    min="0"
                    thumb-label="true"
                    ticks=true
                    label="Regions Opacity"
                    track-fill-color="red"
                    v-model="Op_value"
                ></v-slider>
    </v-panel-header >

    </l-control>

    <div v-if="map.base.val == 'osm'">
      <l-tile-layer :url="osm"></l-tile-layer>
    </div>
    <div v-if="map.base.val == 'satellite'">
      <l-tile-layer :url="satellite"></l-tile-layer>
    </div>
   
    <l-geo-json
      v-for="Boundary in map.Boundary.features"
      :key="Boundary.Id"
      :geojson="Boundary" 
      :options-style="Boundarystyle('utility', Boundary)"
      :weight="1"
    ></l-geo-json>

    <l-geo-json
      v-for="Region in map.Region.features"
      :key="Region.Id"
      :geojson="Region" 
      :options="RegionOptions(Region)"
      :options-style="Regionstyle('utility', Region)"
      :weight="1"
      :visible="getLayerVisibility"
    ></l-geo-json>


     <!-- <l-geo-json
      v-for="Society in map.Society.features"
      :key="Society.Id"
      :geojson="Society" 
      :options="SocietyOptions(Society)"
      :options-style="Societystyle('utility', Society)"
      :weight="1"
      :visible="getLayerVisibility"
    ></l-geo-json> -->

    
   
    <l-marker
      v-for="Tower in map.Tower.features"
      :key="Tower.properties.siteID"
      :lat-lng="[Tower.geometry.coordinates[1],Tower.geometry.coordinates[0]]"
      @click="fetchTowerInfo(Tower)"
    >
    
        <l-tooltip>
          <h3>Site ID: {{ Tower.properties.siteID }} <hr> Status: {{ Tower.properties.officeID }} </h3>
        </l-tooltip>
    
    </l-marker>
    

    <l-marker
      v-if="getSelectedPlot.length >= 2"
      :lat-lng="getSelectedPlot"
    ></l-marker>

    <l-marker
      v-if="getSelectedDeal.length >= 2"
      :lat-lng="getSelectedDeal"
    ></l-marker>
    
  </l-map>
  
</template>

<script>

import { mapGetters } from "vuex";
export default {
 
  props: {
    api: Object,
    map: Object,

  },
  data() {
    return {
      Op_value:20,
    
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      satellite:
        "https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNpZm5hd2F6IiwiYSI6ImNramJjb2hiNjdtemMzMXFqM2N5dHExbHYifQ.dIMTRBIFraRp703Cz93QTw",

      zoom: 16,
      center: [33.6052478760001, 72.9839647430001],
      colors: [
        { name: "ISB Boundary", color: "#fc6142" },
        { name: "Towers", color: "#409acf" },
        
        { name: "Region: ISB_A", color: "#C090C3" },
        { name: "Region: ISB_B", color: "#EA6C90" },
        { name: "Region: ISB_C", color: "#b1e07e" },
        { name: "Region: ISB_D", color: "#ffb875" },
        { name: "Region: ISB_E", color: "#42f5d7" },
        { name: "Region: ISB_F", color: "#8cff75" },
        { name: "Region: ISB_G", color: "#d7f542" },

      ],
      pdfColors: {
        "Working":"#C090C3",
        "Shutdown": "#b1e07e",
        "Critical": "#8cff75",
        "ISB_A": "#C090C3",
        "ISB_B": "#EA6C90",
        "ISB_C": "#b1e07e",
        "ISB_D": "#ffb875",
        "ISB_E": "#42f5d7",
        "ISB_F": "#8cff75",
        "ISB_G": "#d7f542",
        "Graveyard": "#121212",
        "Road": "#a3a3a3",
        "Mosque": "#008c09",
        "Open space": "#ffb875",
        "Park": "#8cff75",
        "School": "#ffb875",
        "Plot": "#89c6f0",
        "Waste Water Treatment Plant": "#878c00",
        

        
        "0": "#7d868a",
        
        null: "#ffcd52"
      },
    };
  },
  computed: {
    ...mapGetters([
      "getPlots",
      "getDealInfo",
      "getZoom",
      "getCenter",
      "getLabels",
      "getSelectedPlot",
      "getSelectedDeal",
      "getInfoDialog",
      "getLayerVisibility",
      "getLeftDrawer",
    ])
  },
  methods: {
    
     toggleLeftDrawer() {
      this.$store.commit("setLeftDrawer", !this.getLeftDrawer);},

    toggleLayers(){
      this.$store.commit("setLayerVisibility", !this.getLayerVisibility);
      },
    zoomUpdate() {
      this.$store.commit("setZoom", this.$refs.map.mapObject.getZoom());
    },
    onEachFeatureOptions() {
      return (feature, layer) => {
        layer.bindTooltip(
          "<div style='text-transform:capitalize'>" + feature + "</div>",
          { permanent: false, sticky: true }
        );
      };
    },


    featureOptions(plot) {
      return {
        onEachFeature: function onEachFeature(feature, layer) {
          if (feature) {
            layer.bindTooltip(`
                  <div>
                    <h2>Khasra Number: ${plot.plot_id}</h2>
                    
                  </div>
            `);
          }
        }
      };
    },

    UtilityOptions(utilities) {
      return {
        onEachFeature: function onEachFeature(feature, layer) {
          if (utilities) {
            layer.bindTooltip(`
                  <div>
                    <h2>${utilities.properties.Type}</h2>
                  </div>
                  
            `,
            {sticky: true }
            );
          }
        }
      };
    },

    RegionOptions(Region) {
      return {
        onEachFeature: function onEachFeature(feature, layer) {
          if (Region) {
            layer.bindTooltip(`
                  <div>
                    <h2>Region: ${Region.properties.Region}</h2>
                  </div>
                  
            `,
            {sticky: true }
            );
          }
        }
      };
    },

    BoundaryOptions(Boundary) {
      return {
        onEachFeature: function onEachFeature(feature, layer) {
          if (Boundary) {
            layer.bindTooltip(`
                  <div>
                    <h2>${Boundary.properties.khasra_no}</h2>
                  </div>
                  
            `,
            {sticky: true }
            );
          }
        }
      };
    },

 
    labelOptions(plot) {
      return {
        onEachFeature: function onEachFeature(feature, layer) {
          if (feature) {
            layer
              .bindTooltip("<div>" + plot.plot_id + "</div>", {
                permanent: true,
                direction: "center",
                className: "my-labels-plots"
              })
              .openTooltip();
          }
        }
      };
    },


    style(feature, params) {
      if (feature == "plot") {
        return {
          strokeColor: "#333333",
          strokeWeight: 2,
          weight: 1,
          color: "#333333",
          opacity: 0.5,
          fillColor:
            params.moza_name != null
              ? this.pdfColors[params.moza_name]
              : "#ffb482",
          fillOpacity: this.Op_value/100
        };
      }
    },

    utilitystyle(feature, utilities) {
      if (feature== 'utility') {
        return {
          strokeColor: "#333333",
          strokeWeight: 0.5,
          weight: 0.5,
          color: "#333333",
          opacity: 1,
          fillColor:
            utilities.properties.Type != null
              ? this.pdfColors[utilities.properties.Type]
              : "#ffb482",
          fillOpacity: 1,
         
        };
      }
    },

    Boundarystyle(feature,) {
      if (feature== 'utility') {
        return {
          strokeColor: "#ff4545",
          strokeWeight: 2,
          weight: 5,
          color: "#fc6142",
          opacity: 1,
          fillColor: "#000000",
          fillOpacity: 0,
         
        };
      }
    },



    Towerstyle(feature, Tower) {
      if (feature== 'utility') {
        return {
          strokeColor: "#333333",
          strokeWeight: 0.5,
          weight: 0.5,
          color: "#333333",
          opacity: 1,
          fillColor:
            Tower.properties.Detail != null
              ? this.pdfColors[Tower.properties.officeID]
              : "#ffb482",
          fillOpacity: 1,
         
        };
      }
    },

    Regionstyle(feature,Region ) {
      if (feature== 'utility') {
        return {
          strokeColor: "#333333",
          strokeWeight: 0.5,
          weight: 0.5,
          color: "red",
          opacity: 1,
          fillColor:
            Region.properties.Region != null
              ? this.pdfColors[Region.properties.Region]
              : "#ffb482",
          fillOpacity: this.Op_value/100,
         
        };
      }
    },
    
    fetchTowerInfo(Tower) {
      this.$refs.map.mapObject.flyTo(
        [Tower.geometry.coordinates[1],Tower.geometry.coordinates[0]],
        18
      );
      this.$store.dispatch("fetchTowerInfo", {
        url: Tower,
        id: Tower.properties.siteID
      });
      this.toggleLeftDrawer();
      this.$store.commit("setPlotInfoSkeleton", true);
      this.$store.commit("setInfoDialog", !this.getInfoDialog);
    }

    
  },
  


  
  mounted() {
    this.$store.commit("setMap", this.$refs.map.mapObject);
    
  }
};
</script>

<style>
.leaflet-tooltip.my-labels-plots {
  background-color: red;
  border: green;
  box-shadow: none;
  font-size: 15px;
}
.legend {
  z-index: 1500;
  width: 320px;
}
.opacity {
  z-index: 1500;
  width: 100px;
  height: 50px;
}
</style>
