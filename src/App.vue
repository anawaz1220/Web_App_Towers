<template>
  <v-app>
    <Navigation :api="api" :map="map"/>
    <v-content>
      <Map3D v-if="map.show3D" :api="api" :map="map" />
      <Map v-else :api="api" :map="map"/>
    </v-content>
  </v-app>
</template>

<script>

import { mapGetters } from "vuex";
import Navigation from "./components/Navigation";
import Map3D from "./components/Map3D";
import Map from "./components/Map";

export default {
  name: "App",
  components: {
    Navigation,
    Map3D,
    Map
  },
  data: () => ({
    api: {
      url: "https://tajresidenciasdysulsm825.the-estatech.com/api",
      filter: {
        block: "",
        status: "",
        type: "",
        dimensions: ""
      }
    },
    map: {
      show3D: false,
      base: {
        osm: false,
        satellite: true,
        val: "satellite"
      },

      // agg_uti: {
      //   utilities: true,
      // },

Boundary: {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.14516448974621,
                33.803329467773494
              ],
              [
                73.17208099365234,
                33.7887420654298
              ],
              [
                73.2008666992187,
                33.778545379638786
              ],
              [
                73.23130035400396,
                33.770648956298885
              ],
              [
                73.244857788086,
                33.763011932373104
              ],
              [
                73.24678802490246,
                33.746505737304744
              ],
              [
                73.2561492919923,
                33.72500991821289
              ],
              [
                73.26558685302734,
                33.709087371826286
              ],
              [
                73.30223846435553,
                33.706195831298885
              ],
              [
                73.33380126953136,
                33.70338439941412
              ],
              [
                73.33108520507824,
                33.70040893554699
              ],
              [
                73.31949615478527,
                33.694786071777344
              ],
              [
                73.30435180664068,
                33.682956695556754
              ],
              [
                73.29048919677746,
                33.66693115234375
              ],
              [
                73.28018951416027,
                33.65734481811529
              ],
              [
                73.26868438720709,
                33.65821838378912
              ],
              [
                73.25366210937511,
                33.65613555908209
              ],
              [
                73.24985504150402,
                33.651554107666016
              ],
              [
                73.2490005493164,
                33.626502990722656
              ],
              [
                73.24510192871105,
                33.594078063964844
              ],
              [
                73.21784210205072,
                33.55598449707037
              ],
              [
                73.19071197509777,
                33.52879333496088
              ],
              [
                73.16322326660162,
                33.49418258666992
              ],
              [
                73.10718536376964,
                33.50967407226574
              ],
              [
                73.06541442871105,
                33.530979156494084
              ],
              [
                73.05410766601568,
                33.54693222045904
              ],
              [
                73.07323455810558,
                33.55591583251953
              ],
              [
                73.10398864746094,
                33.574001312255916
              ],
              [
                73.10588073730463,
                33.59578323364269
              ],
              [
                73.09849548339844,
                33.60471725463873
              ],
              [
                73.07577514648438,
                33.629203796386776
              ],
              [
                73.05747985839844,
                33.6640625
              ],
              [
                73.04188537597662,
                33.65919876098633
              ],
              [
                73.0001678466798,
                33.64291000366222
              ],
              [
                72.97006988525402,
                33.63433074951172
              ],
              [
                72.9485855102539,
                33.62979125976568
              ],
              [
                72.94264221191406,
                33.625938415527344
              ],
              [
                72.93151092529308,
                33.6138153076173
              ],
              [
                72.91447448730474,
                33.60062026977539
              ],
              [
                72.88269805908214,
                33.586730957031364
              ],
              [
                72.85845947265636,
                33.57620239257818
              ],
              [
                72.8516082763673,
                33.58465957641607
              ],
              [
                72.82782745361328,
                33.60985946655279
              ],
              [
                72.80471038818354,
                33.645259857177734
              ],
              [
                72.78266906738287,
                33.680175781250114
              ],
              [
                72.77790069580084,
                33.705310821533146
              ],
              [
                72.7800750732423,
                33.70806121826183
              ],
              [
                72.79002380371088,
                33.710693359375114
              ],
              [
                72.8101425170899,
                33.71362686157232
              ],
              [
                72.84048461914068,
                33.71988296508795
              ],
              [
                72.85610198974615,
                33.72683334350597
              ],
              [
                72.88008880615234,
                33.75444412231451
              ],
              [
                72.9014663696289,
                33.75299453735346
              ],
              [
                72.93186187744146,
                33.747837066650504
              ],
              [
                72.93306732177746,
                33.733577728271484
              ],
              [
                72.96053314208996,
                33.73601913452143
              ],
              [
                73.01160430908214,
                33.76251983642584
              ],
              [
                73.05626678466808,
                33.78076934814453
              ],
              [
                73.14516448974621,
                33.803329467773494
              ]
            ]
          ]
        ]
      }
    }
  ]
},

Tower: {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8799,
        "latitude": 33.5497165,
        "longitude": 73.2009379,
        "location": "Islamabad",
        "staffName": "Adil nawaz",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2009379,
          33.5497165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9816,
        "latitude": 33.5616859,
        "longitude": 73.1810199,
        "location": "Islamabad",
        "staffName": "Adil Raza",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1810199,
          33.5616859
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9255,
        "latitude": 33.5605079,
        "longitude": 73.1649935,
        "location": "Islamabad",
        "staffName": "Adnan Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1649935,
          33.5605079
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 840226,
        "latitude": 33.5506831,
        "longitude": 73.21023,
        "location": "Islamabad",
        "staffName": "Afaiz Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.21023,
          33.5506831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8606,
        "latitude": 33.5522578,
        "longitude": 73.2089621,
        "location": "Islamabad",
        "staffName": "Ahad Iqbal",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2089621,
          33.5522578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8009,
        "latitude": 33.7230913,
        "longitude": 73.1321483,
        "location": "Islamabad",
        "staffName": "Ahmed Shabbir",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1321483,
          33.7230913
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8986,
        "latitude": 33.7606013,
        "longitude": 73.2171035,
        "location": "Islamabad",
        "staffName": "Akif Razzaq",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2171035,
          33.7606013
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9228,
        "latitude": 33.7300062,
        "longitude": 73.1456561,
        "location": "Islamabad",
        "staffName": "Aleem Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1456561,
          33.7300062
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8039,
        "latitude": 33.7387668,
        "longitude": 73.1779349,
        "location": "Islamabad",
        "staffName": "Ali Arshad",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1779349,
          33.7387668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50828,
        "latitude": 33.7459635,
        "longitude": 73.191382,
        "location": "Islamabad",
        "staffName": "Ali Husnain",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.191382,
          33.7459635
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8040,
        "latitude": 33.6896219,
        "longitude": 73.1105042,
        "location": "Islamabad",
        "staffName": "Ali Raza Khan",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1105042,
          33.6896219
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9285,
        "latitude": 33.710881,
        "longitude": 73.106502,
        "location": "Islamabad",
        "staffName": "Ali Raza Sarwer",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.106502,
          33.710881
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9986,
        "latitude": 33.7353101,
        "longitude": 73.1682461,
        "location": "Islamabad",
        "staffName": "Altaf Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1682461,
          33.7353101
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9846,
        "latitude": 33.7453497,
        "longitude": 73.1895847,
        "location": "Islamabad",
        "staffName": "Ammad Imran",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1895847,
          33.7453497
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50319,
        "latitude": 33.7356663,
        "longitude": 73.1689494,
        "location": "Islamabad",
        "staffName": "Aneeq Khalid",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1689494,
          33.7356663
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9858,
        "latitude": 33.6203429,
        "longitude": 73.1203552,
        "location": "Islamabad",
        "staffName": "Aqib Zia",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1203552,
          33.6203429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50450,
        "latitude": 33.567213,
        "longitude": 73.1599681,
        "location": "Islamabad",
        "staffName": "Aqsa",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1599681,
          33.567213
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8794,
        "latitude": 33.6557086,
        "longitude": 73.0939201,
        "location": "Islamabad",
        "staffName": "Arsalan Ishafaq",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0939201,
          33.6557086
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8042,
        "latitude": 33.6754494,
        "longitude": 72.9970856,
        "location": "Islamabad",
        "staffName": "Asad Bilal",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9970856,
          33.6754494
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8885,
        "latitude": 33.7333739,
        "longitude": 73.1521479,
        "location": "Islamabad",
        "staffName": "Asad Muzafar",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1521479,
          33.7333739
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9543,
        "latitude": 33.671907,
        "longitude": 73.0045976,
        "location": "Islamabad",
        "staffName": "Asfand Shakeel",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0045976,
          33.671907
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50757,
        "latitude": 33.6114798,
        "longitude": 73.1271095,
        "location": "Islamabad",
        "staffName": "Asghar Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1271095,
          33.6114798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9226,
        "latitude": 33.5439728,
        "longitude": 73.1775163,
        "location": "Islamabad",
        "staffName": "Asif Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1775163,
          33.5439728
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8852,
        "latitude": 33.563609,
        "longitude": 73.1626948,
        "location": "Islamabad",
        "staffName": "Asif Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1626948,
          33.563609
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50094,
        "latitude": 33.6314363,
        "longitude": 73.1121196,
        "location": "Islamabad",
        "staffName": "Asif Maqbool",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1121196,
          33.6314363
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8162,
        "latitude": 33.5761725,
        "longitude": 73.153364,
        "location": "Islamabad",
        "staffName": "Asif Nawaz",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.153364,
          33.5761725
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9691,
        "latitude": 33.6285887,
        "longitude": 73.1142749,
        "location": "Islamabad",
        "staffName": "Asif Zareef",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1142749,
          33.6285887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9885,
        "latitude": 33.6752853,
        "longitude": 72.9968033,
        "location": "Islamabad",
        "staffName": "Asim Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9968033,
          33.6752853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9035,
        "latitude": 33.5848342,
        "longitude": 73.1468848,
        "location": "Islamabad",
        "staffName": "Ayyaz Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1468848,
          33.5848342
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9888,
        "latitude": 33.616056,
        "longitude": 73.1236645,
        "location": "Islamabad",
        "staffName": "Azam Shehzad",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1236645,
          33.616056
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8782,
        "latitude": 33.6057618,
        "longitude": 73.1314096,
        "location": "Islamabad",
        "staffName": "Azam Sohail",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1314096,
          33.6057618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9430,
        "latitude": 33.6606731,
        "longitude": 73.0897262,
        "location": "Islamabad",
        "staffName": "Azeem Akhtar",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0897262,
          33.6606731
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9449,
        "latitude": 33.5944933,
        "longitude": 73.1397785,
        "location": "Islamabad",
        "staffName": "Azhar Farid",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1397785,
          33.5944933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50866,
        "latitude": 33.5590252,
        "longitude": 73.1969703,
        "location": "Islamabad",
        "staffName": "Azhar Mehmood",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1969703,
          33.5590252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9427,
        "latitude": 33.637639,
        "longitude": 73.1074587,
        "location": "Islamabad",
        "staffName": "Bilal Rehmat",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1074587,
          33.637639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8785,
        "latitude": 33.6912628,
        "longitude": 73.1102936,
        "location": "Islamabad",
        "staffName": "Ehsan Ullah",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1102936,
          33.6912628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9429,
        "latitude": 33.6515493,
        "longitude": 73.0971197,
        "location": "Islamabad",
        "staffName": "Ehsanullah Danish Alvi",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0971197,
          33.6515493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 3288,
        "latitude": 33.676721,
        "longitude": 73.0954947,
        "location": "Islamabad",
        "staffName": "Faisal  Nadeem",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0954947,
          33.676721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8369,
        "latitude": 33.7409742,
        "longitude": 73.181764,
        "location": "Islamabad",
        "staffName": "Faisal Amer",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.181764,
          33.7409742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8556,
        "latitude": 33.6695284,
        "longitude": 73.0950386,
        "location": "Islamabad",
        "staffName": "Fakhar Iqbal",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 3,
        "rev20": 7,
        "rev19": 6,
        "landOwner": "Angro",
        "leaseDurat": null,
        "CostPrYear": "8 Lac",
        "client_1": "Jazz",
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0950386,
          33.6695284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9860,
        "latitude": 33.6627031,
        "longitude": 73.0851251,
        "location": "Islamabad",
        "staffName": "Fida Ullah",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0851251,
          33.6627031
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9996,
        "latitude": 33.5531303,
        "longitude": 73.1704891,
        "location": "Islamabad",
        "staffName": "Ghulam Ali Ghulam Ghous",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1704891,
          33.5531303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50925,
        "latitude": 33.7225991,
        "longitude": 73.1353643,
        "location": "Islamabad",
        "staffName": "Ghulam Dastgeer",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1353643,
          33.7225991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8854,
        "latitude": 33.5985398,
        "longitude": 73.1368023,
        "location": "Islamabad",
        "staffName": "Ghulam Murtza",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1368023,
          33.5985398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50743,
        "latitude": 33.6982956,
        "longitude": 73.110527,
        "location": "Islamabad",
        "staffName": "Ghulam Mustafa",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.110527,
          33.6982956
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 111467,
        "latitude": 33.5506973,
        "longitude": 73.2100296,
        "location": "Islamabad",
        "staffName": "Ghulam Mustafa",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2100296,
          33.5506973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8033,
        "latitude": 33.7072576,
        "longitude": 73.1062907,
        "location": "Islamabad",
        "staffName": "Ghulam Nabi",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1062907,
          33.7072576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8869,
        "latitude": 33.6583636,
        "longitude": 73.0860316,
        "location": "Islamabad",
        "staffName": "Ghulam Qasim",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 2,
        "rev20": 6,
        "rev19": 3,
        "landOwner": "Waseem Malik",
        "leaseDurat": "10 Years",
        "CostPrYear": "20 Lac",
        "client_1": "Jazz",
        "client_2": "Ufon",
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0860316,
          33.6583636
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 84,
        "latitude": 33.6683914,
        "longitude": 73.0086895,
        "location": "Islamabad",
        "staffName": "Gulfam Abbas",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0086895,
          33.6683914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9301,
        "latitude": 33.6544151,
        "longitude": 73.0103455,
        "location": "Islamabad",
        "staffName": "\"Hafiz Farooq",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0103455,
          33.6544151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8964,
        "latitude": 33.6488686,
        "longitude": 73.0029526,
        "location": "Islamabad",
        "staffName": "Ahmad\"",
        "stafCell": "0123-4567891",
        "landStatus": "Owned",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0029526,
          33.6488686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 9542,
        "latitude": 33.6499481,
        "longitude": 73.0029144,
        "location": "Islamabad",
        "staffName": "Hafiz Muhammad Hamad Hameed",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0029144,
          33.6499481
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8034,
        "latitude": 33.6918488,
        "longitude": 73.0024567,
        "location": "Islamabad",
        "staffName": "Hafiz Muhammad Khalid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0024567,
          33.6918488
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 50819,
        "latitude": 33.6919518,
        "longitude": 73.0025253,
        "location": "Islamabad",
        "staffName": "Hafiz Zahid Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0025253,
          33.6919518
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 3098,
        "latitude": 33.6917648,
        "longitude": 73.0025253,
        "location": "Islamabad",
        "staffName": "Hameed Akhtar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0025253,
          33.6917648
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 3111,
        "latitude": 33.6257373,
        "longitude": 73.1163087,
        "location": "Islamabad",
        "staffName": "Hammad Yasin",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1163087,
          33.6257373
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 8832,
        "latitude": 33.5399284,
        "longitude": 73.0718307,
        "location": "Islamabad",
        "staffName": "Haq Nawaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0718307,
          33.5399284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "LTE",
        "siteID": 112792,
        "latitude": 33.5399284,
        "longitude": 73.0718307,
        "location": "Islamabad",
        "staffName": "Haris Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_G"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0718307,
          33.5399284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2786,
        "latitude": 33.5513954,
        "longitude": 73.2120132,
        "location": "Islamabad",
        "staffName": "Haroon Ashfaq",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2120132,
          33.5513954
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 5460,
        "latitude": 33.5522728,
        "longitude": 73.2091751,
        "location": "Islamabad",
        "staffName": "Haseeb Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2091751,
          33.5522728
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2860,
        "latitude": 33.5513992,
        "longitude": 73.2120132,
        "location": "Islamabad",
        "staffName": "Hassan Saeedullah",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2120132,
          33.5513992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1879,
        "latitude": 33.5517998,
        "longitude": 73.2127991,
        "location": "Islamabad",
        "staffName": "Ibrahim Usman",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2127991,
          33.5517998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1485,
        "latitude": 33.5517502,
        "longitude": 73.2127151,
        "location": "Islamabad",
        "staffName": "Ihtisham Nazir",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2127151,
          33.5517502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1885,
        "latitude": 33.5517502,
        "longitude": 73.2127075,
        "location": "Islamabad",
        "staffName": "Inam Ullah",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2127075,
          33.5517502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2386,
        "latitude": 33.5513992,
        "longitude": 73.2120132,
        "location": "Islamabad",
        "staffName": "Irfan Mushtaq",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2120132,
          33.5513992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 5386,
        "latitude": 33.5513992,
        "longitude": 73.2120132,
        "location": "Islamabad",
        "staffName": "Ishfaq Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2120132,
          33.5513992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2460,
        "latitude": 33.5522449,
        "longitude": 73.2087122,
        "location": "Islamabad",
        "staffName": "Junaid  Talat",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2087122,
          33.5522449
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1479,
        "latitude": 33.5509611,
        "longitude": 73.2044289,
        "location": "Islamabad",
        "staffName": "Kamran Nasar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2044289,
          33.5509611
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 4479,
        "latitude": 33.5522569,
        "longitude": 73.2093559,
        "location": "Islamabad",
        "staffName": "Kamran Zahoor",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Critical",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2093559,
          33.5522569
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 4485,
        "latitude": 33.5517502,
        "longitude": 73.2127304,
        "location": "Islamabad",
        "staffName": "Kanwar Asfand Yar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2127304,
          33.5517502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 4479,
        "latitude": 33.5502551,
        "longitude": 73.2098146,
        "location": "Islamabad",
        "staffName": "Khuram Shahzad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2098146,
          33.5502551
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 5416,
        "latitude": 33.5500679,
        "longitude": 73.2094955,
        "location": "Islamabad",
        "staffName": "Khurram Ehsan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2094955,
          33.5500679
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2816,
        "latitude": 33.5500793,
        "longitude": 73.2095795,
        "location": "Islamabad",
        "staffName": "Lahrasab Jahanzaib",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2095795,
          33.5500793
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2416,
        "latitude": 33.5501022,
        "longitude": 73.2096252,
        "location": "Islamabad",
        "staffName": "M Zeeshan Raza",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2096252,
          33.5501022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1479,
        "latitude": 33.5502024,
        "longitude": 73.2096654,
        "location": "Islamabad",
        "staffName": "M. Saqib Ali Ramay",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2096654,
          33.5502024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2878,
        "latitude": 33.5500963,
        "longitude": 73.2095695,
        "location": "Islamabad",
        "staffName": "Mahboob Aalam",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2095695,
          33.5500963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 4479,
        "latitude": 33.549984,
        "longitude": 73.2096481,
        "location": "Islamabad",
        "staffName": "Mashal Khan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.2096481,
          33.549984
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2496,
        "latitude": 33.6494827,
        "longitude": 73.0025864,
        "location": "Islamabad",
        "staffName": "Mazhar Naeem",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0025864,
          33.6494827
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1598,
        "latitude": 33.699337,
        "longitude": 73.0051193,
        "location": "Islamabad",
        "staffName": "Mohsin Raza",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0051193,
          33.699337
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1998,
        "latitude": 33.6994591,
        "longitude": 73.0050735,
        "location": "Islamabad",
        "staffName": "Muahmmad Nadeem",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0050735,
          33.6994591
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 3573,
        "latitude": 33.6993065,
        "longitude": 73.0051193,
        "location": "Islamabad",
        "staffName": "Mubashir Khalid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0051193,
          33.6993065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 3973,
        "latitude": 33.6994591,
        "longitude": 73.0050735,
        "location": "Islamabad",
        "staffName": "Mudasar Khushi",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0050735,
          33.6994591
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 573,
        "latitude": 33.6993561,
        "longitude": 73.0051041,
        "location": "Islamabad",
        "staffName": "Mudassar Shahzad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Stoped",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0051041,
          33.6993561
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 5382,
        "latitude": 33.7446327,
        "longitude": 73.1833649,
        "location": "Islamabad",
        "staffName": "Mudasser Iqbal",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1833649,
          33.7446327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 2382,
        "latitude": 33.7446251,
        "longitude": 73.1833572,
        "location": "Islamabad",
        "staffName": "Muhamamd Waqas",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1833572,
          33.7446251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 6147,
        "latitude": 33.7449622,
        "longitude": 73.1835548,
        "location": "Islamabad",
        "staffName": "Muhammad  Asad Ashraf",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1835548,
          33.7449622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 6500,
        "latitude": 33.5949799,
        "longitude": 72.8769184,
        "location": "Islamabad",
        "staffName": "Muhammad Abid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_B"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8769184,
          33.5949799
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 3948,
        "latitude": 33.6503519,
        "longitude": 73.1308365,
        "location": "Islamabad",
        "staffName": "Muhammad Adeel",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1308365,
          33.6503519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "UMTS",
        "siteID": 1011,
        "latitude": 33.7320938,
        "longitude": 73.0841064,
        "location": "Islamabad",
        "staffName": "Muhammad Adnan Bhatti",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0841064,
          33.7320938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3743,
        "latitude": 33.6508255,
        "longitude": 73.1576691,
        "location": "Islamabad",
        "staffName": "Muhammad Adnan Riaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1576691,
          33.6508255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3792,
        "latitude": 33.6571541,
        "longitude": 73.1537476,
        "location": "Islamabad",
        "staffName": "Muhammad Akhtar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1537476,
          33.6571541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3021,
        "latitude": 33.6500626,
        "longitude": 73.0800629,
        "location": "Islamabad",
        "staffName": "Muhammad Amir",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0800629,
          33.6500626
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4812,
        "latitude": 33.6792564,
        "longitude": 73.0780869,
        "location": "Islamabad",
        "staffName": "Muhammad Anees Khalid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0780869,
          33.6792564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3257,
        "latitude": 33.6574173,
        "longitude": 73.0781174,
        "location": "Islamabad",
        "staffName": "Muhammad Asghar Abid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0781174,
          33.6574173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4879,
        "latitude": 33.7047577,
        "longitude": 73.0425415,
        "location": "Islamabad",
        "staffName": "Muhammad Atiq Ur Rahman",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0425415,
          33.7047577
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4881,
        "latitude": 33.7163734,
        "longitude": 73.0483322,
        "location": "Islamabad",
        "staffName": "Muhammad Ayyaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0483322,
          33.7163734
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4007,
        "latitude": 33.6921277,
        "longitude": 73.073598,
        "location": "Islamabad",
        "staffName": "Muhammad Farhan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.073598,
          33.6921277
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4032,
        "latitude": 33.7019128,
        "longitude": 73.0835463,
        "location": "Islamabad",
        "staffName": "Muhammad Farhan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0835463,
          33.7019128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4041,
        "latitude": 33.7214179,
        "longitude": 73.0599811,
        "location": "Islamabad",
        "staffName": "Muhammad Farhan Raza",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0599811,
          33.7214179
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4078,
        "latitude": 33.7298584,
        "longitude": 73.0772324,
        "location": "Islamabad",
        "staffName": "Muhammad Farooq Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0772324,
          33.7298584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4079,
        "latitude": 33.6951218,
        "longitude": 73.0641174,
        "location": "Islamabad",
        "staffName": "Muhammad Ijaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0641174,
          33.6951218
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4193,
        "latitude": 33.7213821,
        "longitude": 73.0747833,
        "location": "Islamabad",
        "staffName": "Muhammad Ikram",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0747833,
          33.7213821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4276,
        "latitude": 33.655632,
        "longitude": 73.0694885,
        "location": "Islamabad",
        "staffName": "Muhammad Imran",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0694885,
          33.655632
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4555,
        "latitude": 33.6985588,
        "longitude": 73.0860214,
        "location": "Islamabad",
        "staffName": "Muhammad Irfan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0860214,
          33.6985588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4794,
        "latitude": 33.6584969,
        "longitude": 73.0914383,
        "location": "Islamabad",
        "staffName": "Muhammad Mujtaba Saeedi",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0914383,
          33.6584969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4872,
        "latitude": 33.6677551,
        "longitude": 73.0605392,
        "location": "Islamabad",
        "staffName": "Muhammad Mustansar Bilal Bhatti",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0605392,
          33.6677551
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4871,
        "latitude": 33.657276,
        "longitude": 73.078617,
        "location": "Islamabad",
        "staffName": "Muhammad Nauman",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.078617,
          33.657276
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4875,
        "latitude": 33.7281945,
        "longitude": 73.0734463,
        "location": "Islamabad",
        "staffName": "Muhammad Rizwan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0734463,
          33.7281945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5087,
        "latitude": 33.6939392,
        "longitude": 73.0846024,
        "location": "Islamabad",
        "staffName": "Muhammad Saleem Malik",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0846024,
          33.6939392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5551,
        "latitude": 33.6932869,
        "longitude": 73.0411301,
        "location": "Islamabad",
        "staffName": "Muhammad Saqlain Akram",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0411301,
          33.6932869
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4888,
        "latitude": 33.6568947,
        "longitude": 73.0790558,
        "location": "Islamabad",
        "staffName": "Muhammad SARMAD WALI",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0790558,
          33.6568947
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5222,
        "latitude": 33.6972928,
        "longitude": 73.0624785,
        "location": "Islamabad",
        "staffName": "Muhammad Shafiq",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0624785,
          33.6972928
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5278,
        "latitude": 33.7104073,
        "longitude": 73.0772552,
        "location": "Islamabad",
        "staffName": "Muhammad Shafique",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0772552,
          33.7104073
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5287,
        "latitude": 33.7142906,
        "longitude": 73.0497131,
        "location": "Islamabad",
        "staffName": "Muhammad Shafique",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0497131,
          33.7142906
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5293,
        "latitude": 33.7135696,
        "longitude": 73.0748749,
        "location": "Islamabad",
        "staffName": "Muhammad Shoaib",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0748749,
          33.7135696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5313,
        "latitude": 33.6844241,
        "longitude": 73.0479766,
        "location": "Islamabad",
        "staffName": "Muhammad Taimoor",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0479766,
          33.6844241
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5429,
        "latitude": 33.6523705,
        "longitude": 73.0959396,
        "location": "Islamabad",
        "staffName": "Muhammad Tanveer",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0959396,
          33.6523705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5553,
        "latitude": 33.699852,
        "longitude": 73.0362778,
        "location": "Islamabad",
        "staffName": "Muhammad Umair Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0362778,
          33.699852
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5554,
        "latitude": 33.7061443,
        "longitude": 73.0375481,
        "location": "Islamabad",
        "staffName": "Muhammad Umair Younas",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0375481,
          33.7061443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5556,
        "latitude": 33.716095,
        "longitude": 73.0498734,
        "location": "Islamabad",
        "staffName": "Muhammad Umar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0498734,
          33.716095
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5557,
        "latitude": 33.7089145,
        "longitude": 73.0537796,
        "location": "Islamabad",
        "staffName": "Muhammad Usama Ashraf",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0537796,
          33.7089145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5559,
        "latitude": 33.7230085,
        "longitude": 73.0661352,
        "location": "Islamabad",
        "staffName": "Muhammad Waqar Arshad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0661352,
          33.7230085
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5561,
        "latitude": 33.7074966,
        "longitude": 73.0794373,
        "location": "Islamabad",
        "staffName": "Muhammad Waqas",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0794373,
          33.7074966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5857,
        "latitude": 33.7037926,
        "longitude": 73.0576248,
        "location": "Islamabad",
        "staffName": "Muhammad Waseem",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0576248,
          33.7037926
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5430,
        "latitude": 33.6569481,
        "longitude": 73.0790558,
        "location": "Islamabad",
        "staffName": "Muhammad Yasir Qamar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0790558,
          33.6569481
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5431,
        "latitude": 33.6510391,
        "longitude": 73.0737915,
        "location": "Islamabad",
        "staffName": "Muhammad Younis",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0737915,
          33.6510391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5566,
        "latitude": 33.6675556,
        "longitude": 73.0780012,
        "location": "Islamabad",
        "staffName": "Muhammad Zahid",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0780012,
          33.6675556
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5459,
        "latitude": 33.6543022,
        "longitude": 73.0802774,
        "location": "Islamabad",
        "staffName": "Muhammad Zubair Anwer",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0802774,
          33.6543022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5377,
        "latitude": 33.6673355,
        "longitude": 73.0775795,
        "location": "Islamabad",
        "staffName": "Mujahid Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0775795,
          33.6673355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 1,
        "latitude": 33.6574402,
        "longitude": 73.078186,
        "location": "Islamabad",
        "staffName": "Mukhtar Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.078186,
          33.6574402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3923,
        "latitude": 33.6699409,
        "longitude": 73.1477814,
        "location": "Islamabad",
        "staffName": "Nabeel Ahmad",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1477814,
          33.6699409
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 1,
        "latitude": 33.6574554,
        "longitude": 73.0780182,
        "location": "Islamabad",
        "staffName": "Nabeel Aslam",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0780182,
          33.6574554
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 1213,
        "latitude": 33.6478348,
        "longitude": 73.1623306,
        "location": "Islamabad",
        "staffName": "Naeem Mushtaq",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1623306,
          33.6478348
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4013,
        "latitude": 33.6595506,
        "longitude": 73.0668343,
        "location": "Islamabad",
        "staffName": "Naveed Akram",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0668343,
          33.6595506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 1216,
        "latitude": 33.6508235,
        "longitude": 73.1576579,
        "location": "Islamabad",
        "staffName": "Noor Khan",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1576579,
          33.6508235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 2053,
        "latitude": 33.6541757,
        "longitude": 73.1566393,
        "location": "Islamabad",
        "staffName": "Nouman Ijaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1566393,
          33.6541757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 2146,
        "latitude": 33.6725607,
        "longitude": 73.1455644,
        "location": "Islamabad",
        "staffName": "Omair Zeb",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1455644,
          33.6725607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 2288,
        "latitude": 33.6780402,
        "longitude": 73.0965904,
        "location": "Islamabad",
        "staffName": "Qaiser Idrees",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0965904,
          33.6780402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 2290,
        "latitude": 33.6574631,
        "longitude": 73.077713,
        "location": "Islamabad",
        "staffName": "Qamaruddin",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.077713,
          33.6574631
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3005,
        "latitude": 33.6560898,
        "longitude": 73.0792694,
        "location": "Islamabad",
        "staffName": "Qasim Talha",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0792694,
          33.6560898
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3039,
        "latitude": 33.6875581,
        "longitude": 73.1292419,
        "location": "Islamabad",
        "staffName": "Rana Muhammad Sulman",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1292419,
          33.6875581
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 3966,
        "latitude": 33.6673615,
        "longitude": 73.1499573,
        "location": "Islamabad",
        "staffName": "Rao Faizan Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1499573,
          33.6673615
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4040,
        "latitude": 33.6883826,
        "longitude": 73.1215977,
        "location": "Islamabad",
        "staffName": "Rao Farhan Safdar",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1215977,
          33.6883826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4306,
        "latitude": 33.6492582,
        "longitude": 73.1615669,
        "location": "Islamabad",
        "staffName": "Rashad Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1615669,
          33.6492582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4556,
        "latitude": 33.6779327,
        "longitude": 73.0959473,
        "location": "Islamabad",
        "staffName": "Rashid Mehmood",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0959473,
          33.6779327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4776,
        "latitude": 33.6579933,
        "longitude": 73.1536713,
        "location": "Islamabad",
        "staffName": "Rehman Baber",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1536713,
          33.6579933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4780,
        "latitude": 33.6508255,
        "longitude": 73.1576462,
        "location": "Islamabad",
        "staffName": "Riaz Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1576462,
          33.6508255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4785,
        "latitude": 33.6878395,
        "longitude": 73.1092072,
        "location": "Islamabad",
        "staffName": "Saddam Hussain",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1092072,
          33.6878395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4869,
        "latitude": 33.6601887,
        "longitude": 73.0855629,
        "location": "Islamabad",
        "staffName": "Sagar Minhas",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0855629,
          33.6601887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4873,
        "latitude": 33.6574934,
        "longitude": 73.0779489,
        "location": "Islamabad",
        "staffName": "Saif Ur Rehman",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0779489,
          33.6574934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5175,
        "latitude": 33.6701694,
        "longitude": 73.147603,
        "location": "Islamabad",
        "staffName": "Saifullah",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.147603,
          33.6701694
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5571,
        "latitude": 33.6571541,
        "longitude": 73.1537476,
        "location": "Islamabad",
        "staffName": "Sajed Hussain Shah",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1537476,
          33.6571541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5860,
        "latitude": 33.6636441,
        "longitude": 73.0862433,
        "location": "Islamabad",
        "staffName": "Sajid Nawaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 1,
        "rev20": 4,
        "rev19": 5,
        "landOwner": "Ansar Riaz",
        "leaseDurat": "20 Years",
        "CostPrYear": "20 Lac",
        "client_1": "Zong",
        "client_2": "Jazz",
        "client_3": "Telonor",
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.0862433,
          33.6636441
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 5861,
        "latitude": 33.6633478,
        "longitude": 73.1531439,
        "location": "Islamabad",
        "staffName": "Saqib Ali",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.1531439,
          33.6633478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4039,
        "latitude": 33.7423515,
        "longitude": 73.184227,
        "location": "Islamabad",
        "staffName": "Shakeel Mulazim",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.184227,
          33.7423515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Type": "GSM",
        "siteID": 4986,
        "latitude": 33.7572385,
        "longitude": 73.212199,
        "location": "Islamabad",
        "staffName": "Shakeel Riaz",
        "stafCell": "0123-4567891",
        "landStatus": "Leased",
        "officeID": "Working",
        "rev21": 0,
        "rev20": 0,
        "rev19": 0,
        "landOwner": null,
        "leaseDurat": null,
        "CostPrYear": null,
        "client_1": null,
        "client_2": null,
        "client_3": null,
        "region_id": "ISB_E"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.212199,
          33.7572385
        ]
      }
    }
  ]
},

Region: {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_A"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.19071197509811,
                33.52879333496128
              ],
              [
                73.1309737333894,
                33.62437116875981
              ],
              [
                73.21835422029045,
                33.67724866634245
              ],
              [
                73.25366210937545,
                33.656135559082486
              ],
              [
                73.24985504150436,
                33.65155410766636
              ],
              [
                73.2490005493168,
                33.626502990723054
              ],
              [
                73.24510192871139,
                33.59407806396524
              ],
              [
                73.21784210205112,
                33.55598449707071
              ],
              [
                73.19071197509811,
                33.52879333496128
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_B"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                72.90146636962902,
                33.75299453735357
              ],
              [
                72.94858551025402,
                33.629791259765796
              ],
              [
                72.94264221191412,
                33.62593841552746
              ],
              [
                72.93151092529314,
                33.613815307617415
              ],
              [
                72.9144744873048,
                33.60062026977545
              ],
              [
                72.88269805908226,
                33.58673095703148
              ],
              [
                72.85845947265642,
                33.576202392578296
              ],
              [
                72.85160827636741,
                33.58465957641613
              ],
              [
                72.8278274536134,
                33.609859466552905
              ],
              [
                72.80471038818365,
                33.64525985717785
              ],
              [
                72.78266906738293,
                33.68017578125017
              ],
              [
                72.7779006958009,
                33.70531082153326
              ],
              [
                72.78007507324241,
                33.708061218261946
              ],
              [
                72.790023803711,
                33.71069335937517
              ],
              [
                72.81014251708996,
                33.713626861572436
              ],
              [
                72.8404846191408,
                33.719882965088004
              ],
              [
                72.85610198974621,
                33.72683334350609
              ],
              [
                72.88008880615246,
                33.754444122314624
              ],
              [
                72.90146636962902,
                33.75299453735357
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_C"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.08706174868735,
                33.711046562066656
              ],
              [
                73.0011788502564,
                33.75711009169464
              ],
              [
                73.01160430908237,
                33.76251983642612
              ],
              [
                73.05626678466837,
                33.780769348144815
              ],
              [
                73.14516448974649,
                33.80332946777372
              ],
              [
                73.08706174868735,
                33.711046562066656
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_D"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.08706174868735,
                33.711046562066656
              ],
              [
                73.05747985839872,
                33.664062500000284
              ],
              [
                73.0418853759769,
                33.65919876098661
              ],
              [
                73.00016784668003,
                33.64291000366251
              ],
              [
                72.9700698852543,
                33.634330749512
              ],
              [
                72.94858551025419,
                33.629791259765966
              ],
              [
                72.90146636962919,
                33.75299453735374
              ],
              [
                72.93186187744175,
                33.74783706665079
              ],
              [
                72.93306732177774,
                33.73357772827177
              ],
              [
                72.96053314209024,
                33.73601913452171
              ],
              [
                73.0011788502564,
                33.75711009169464
              ],
              [
                73.08706174868735,
                33.711046562066656
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_E"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.2536621093754,
                33.65613555908237
              ],
              [
                73.1075129314737,
                33.74352858508763
              ],
              [
                73.14516448974649,
                33.80332946777372
              ],
              [
                73.17208099365257,
                33.788742065430085
              ],
              [
                73.20086669921898,
                33.77854537963907
              ],
              [
                73.23130035400425,
                33.77064895629917
              ],
              [
                73.24485778808628,
                33.76301193237339
              ],
              [
                73.24678802490268,
                33.74650573730503
              ],
              [
                73.25614929199259,
                33.725009918213175
              ],
              [
                73.26558685302763,
                33.70908737182657
              ],
              [
                73.30223846435581,
                33.70619583129917
              ],
              [
                73.33380126953165,
                33.70338439941435
              ],
              [
                73.33108520507847,
                33.70040893554727
              ],
              [
                73.31949615478555,
                33.69478607177763
              ],
              [
                73.30435180664097,
                33.68295669555704
              ],
              [
                73.29048919677774,
                33.666931152344034
              ],
              [
                73.28018951416055,
                33.657344818115575
              ],
              [
                73.26868438720737,
                33.658218383789404
              ],
              [
                73.2536621093754,
                33.65613555908237
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_F"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.21835422029045,
                33.67724866634245
              ],
              [
                73.09849548339878,
                33.60471725463907
              ],
              [
                73.07577514648472,
                33.62920379638712
              ],
              [
                73.05747985839878,
                33.66406250000034
              ],
              [
                73.10751293147382,
                33.74352858508769
              ],
              [
                73.21835422029045,
                33.67724866634245
              ]
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Boundary": "Islamabad",
        "Region": "ISB_G"
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                73.19071197509811,
                33.52879333496128
              ],
              [
                73.16322326660202,
                33.49418258667026
              ],
              [
                73.10718536376999,
                33.50967407226608
              ],
              [
                73.06541442871139,
                33.53097915649448
              ],
              [
                73.05410766601602,
                33.54693222045944
              ],
              [
                73.07323455810592,
                33.55591583251987
              ],
              [
                73.10398864746128,
                33.57400131225626
              ],
              [
                73.10588073730503,
                33.59578323364303
              ],
              [
                73.09849548339878,
                33.60471725463907
              ],
              [
                73.1309737333894,
                33.62437116875981
              ],
              [
                73.19071197509811,
                33.52879333496128
              ]
            ]
          ]
        ]
      }
    }
  ]
},



    }
  }),
  computed: {
    ...mapGetters(["getPlots"])
  },
  methods: {
    
  },
  created() {
    this.$store.dispatch("fetchPlots", {
      url: this.api.url,
      params: {
        block: this.api.filter.block,
        status: this.api.filter.status,
        type: this.api.filter.type,
        dimensions: this.api.filter.dimensions
      }
    });
    this.$store.dispatch("fetchBlockList", {
      url: this.api.url
    });
  },
  mounted() {
    
  }
};
</script>
<style>
.leaflet-pane,
.leaflet-top,
.leaflet-left,
.leaflet-bottom,
.leaflet-right {
  z-index: 100 !important;
}
.v-dialog__content {
  z-index: 1200 !important;
}
.v-toolbar__extension {
  padding-left: 0;
  padding-right: 0;
}
::-webkit-scrollbar {
  width: 5px; /* Remove scrollbar space */
  background: #f2efe9; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #cecece;
}
</style>
