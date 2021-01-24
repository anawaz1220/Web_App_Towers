<template>
  <nav>
    <v-app-bar
      color="#ffffff"
      app
      clipped-left
      clipped-right
      style="z-index:1101"
      extended
      height="55"
      extension-height="5"
    >
      <v-progress-linear
        slot="extension"
        color="green"
        :indeterminate="getLoading"
        :hidden="!getLoading"
      ></v-progress-linear>
      <v-app-bar-nav-icon
        color="primary"
        @click="toggleLeftDrawer"
        :disabled="map.show3D"
      ></v-app-bar-nav-icon>

      <!-- Society Logo -->

      <v-toolbar-title class="hidden-md-and-down">
         <img
          height="60px"
          width="130px"
          src= "engro-logo.jpg" 
          alt="Engro"
          title="Engro"
          />


        <!-- Society Name -->

        <snap style= "font-size: 22px; color:#098217; margin-left: 350px; vertical-align:50%;"> Tower Management System </snap>
      </v-toolbar-title>



      <v-spacer></v-spacer>
      <!-- {{plotID}} -->
      <v-spacer></v-spacer>
      
      <!-- <v-btn
        :disabled="get3DPlots.length == 0"
        :color="map.show3D ? 'red' : 'green'"
        :text="!map.show3D"
        class="ma-2 white--text"
        @click="toggle3DMap" -->
      <!-- > -->
        <!-- <v-icon dark left v-if="!map.show3D">
          {{
            get3DPlots.length == 0
              ? `mdi-cube-outline mdi-spin`
              : map.show3D
              ? "mdi-close"
              : "mdi-cube-outline"
          }}</v-icon
        >3D Map -->
      <!-- </v-btn> -->

    <v-btn  class="ma-2" depressed color="success" @click="editalert"><v-icon left> mdi-pencil</v-icon> Edit </v-btn>

    <v-btn depressed color="primary" @click="loginForm= true">Login</v-btn>
  
    <v-btn icon color="primary" @click="resetSelect"> <v-icon>mdi-refresh</v-icon> </v-btn>

    <v-app-bar-nav-icon color="primary" @click="toggleRightDrawer" ></v-app-bar-nav-icon>

    </v-app-bar>


    <!-- Drawers -->
    
    <v-navigation-drawer 
    app 
    :value="getLeftDrawer" 
    clipped 
    style="z-index:1100"
    width="250px"
    >
      <v-layout row wrap class="ma-0 pa-2">

        <h3 class="ma-0 py-3 px-8" style= "font-size: 22px; color:#098217; margin-right: 500px; vertical-align:50%;"
        >Tower Summary</h3>
        
          <v-avatar tile height="200px" width="240px" class="ma-1 pa-8">
            <img
              src="site_tower.jpeg"
              alt="Site Tower"
              width="470px"
              height="470px"    
            >
          </v-avatar>
           
          <v-chip-group class="ma-1 pa-2"> 
            <v-chip color="#93d14b"> Site ID: 1213 </v-chip>
            <v-chip color="#93d14b">Type: LTE</v-chip>
            <!-- <v-chip color="#4bd1d1">Status: Working</v-chip> -->
          </v-chip-group>
        


      <v-card class="legend" @click="clientForm = true" >
            <v-expansion-panel-header >
             <h4 style="text-align: center;">Client's Details</h4>
            </v-expansion-panel-header>
      </v-card>

      <v-card class="legend" @click="maintananceForm = true">
            <v-expansion-panel-header >
             <h4 style="text-align: center;">Maintenance Details</h4>
            </v-expansion-panel-header>
      </v-card>

      <v-card class="legend" @click="populationForm = true">
            <v-expansion-panel-header>
             <h4 style="text-align: center;">Finance Details</h4>
            </v-expansion-panel-header>
      </v-card>

      <v-card class="legend" @click="equiptmentForm = true">
            <v-expansion-panel-header>
              <h4 style="text-align: center;">Equipment Details</h4>
            </v-expansion-panel-header>
      </v-card>

      <v-card class="legend" @click="propertyForm = true">
            <v-expansion-panel-header>
              <h4 style="text-align: center;">Property Details</h4>
            </v-expansion-panel-header>
      </v-card>
    
      
      </v-layout>


      <!-- <div class="pa-1"> -->
           
        <!-- <v-divider class="my-2"></v-divider>   -->

        <!-- <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12 class="my-4">
            <h1>Deals Summary</h1>
          </v-flex>
          <v-flex xs12>
            <v-layout row align-center justify-space-between class="ma-0">
      
              <div> 
                <v-chip color="green" text-color="white" class="mx-1"
                  >Completed</v-chip
                >
                <v-chip color="#d1c038" text-color="white" class="mx-1"
                  >In-Progress</v-chip
                >
              </div>
            </v-layout>
          </v-flex> -->

          <!-- <v-flex xs12>
            <v-layout row align-center justify-space-between class="ma-0">
              <div>
                <v-chip color="green" text-color="white" style= "margin-left: 10px; vertical-align:50%;"
                  >25</v-chip>
                <v-chip color="#d1c038" text-color="white" style= "margin-left: 100px; vertical-align:50%;"
                  >31</v-chip>
              </div>
            </v-layout>
          </v-flex> -->

           <!-- <v-flex xs12 class="my-2">
            <v-progress-linear
              rounded
              height="10"
              background-color="#d1c038" 
              color="success"
              :value=30
            ></v-progress-linear>
            <h3>30%</h3>
          </v-flex>
        </v-layout>

        <v-divider class="my-2"></v-divider>

        <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12 class="my-2">
            <h1>Moza</h1>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around class="ma-0 pa-2">
          <v-flex xs6 v-for="block in getSummary.blocks" :key="block.block">
            <v-layout row wrap justify-center align-center class="ma-2">
              <v-progress-circular
                :rotate="-90"
                :size="90"
                :width="7"
                :value="getSummary.plots.sold / getSummary.plots.total"
                color="green"
                >
                {{
                  ((block.sold / block.total) * 100).toFixed(0)
                }}%
                </v-progress-circular>

              <p style="text-align:center;">{{ block.block }}</p>
            </v-layout>
          </v-flex>
        </v-layout> -->
      

        

        <!-- <v-layout row wrap justify-space-around class="ma-0 pa-2">
          <v-flex
            xs6
            v-for="dimension in getSummary.dimensions"
            :key="dimension.dimension"
          >
            <v-layout row wrap justify-center align-center class="ma-2">
              <v-progress-circular
                :rotate="-90"
                :size="90"
                :width="7"
                :value="(dimension.sold / dimension.total) * 100"
                color="green"
                >{{
                  ((dimension.sold / dimension.total) * 100).toFixed(0)
                }}%</v-progress-circular
              >
              <p style="text-align:center;">
                {{
                  dimension.dimension == null
                    ? "No Dimensions"
                    : dimension.dimension
                }}
              </p>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-divider class="my-2"></v-divider>
       
        <v-layout row wrap justify-space-around class="ma-0 pa-2">
          <v-flex
            xs6
            v-for="category in getSummary.categories"
            :key="category.category"
          >
            <v-layout row wrap justify-center align-center class="ma-2">
              <v-progress-circular
                :rotate="-90"
                :size="90"
                :width="7"
                :value="(category.sold / category.total) * 100"
                color="green"
                >{{
                  ((category.sold / category.total) * 100).toFixed(0)
                }}%</v-progress-circular
              >
              <p style="text-align:center;">{{ category.category }}</p>
            </v-layout>
          </v-flex>
        </v-layout> 
      </div> -->
    </v-navigation-drawer>
    <!--  -->
    <v-navigation-drawer
      app
      right
      :value="getRightDrawer && !map.show3D"
      clipped
      style="z-index:1100"
      width="200px"
    >
      <div class="pa-1">

                  <v-switch 
                    v-model="switchstatus" 
                    label='Regions Map' 
                    @change='toggleLayers'
                  ></v-switch>

  <v-divider class="my-2"></v-divider>

        <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12>
            <h1>Search</h1>
          </v-flex>
            <v-autocomplete
              :items="CityName"
              v-model="cityid"
              label="City Name"
              hide-details
              overflow
              dense
              outlined
          ></v-autocomplete>
            <v-autocomplete
              :items="regions"
              v-model="region_id"
              label="Region ID"
              hide-details
              overflow
              dense
              outlined
          ></v-autocomplete>
      
            <v-autocomplete
              :items="towerlist"
              v-model="towerID"
              label="Tower ID"
              hide-details
              overflow
              dense
              outlined
            ></v-autocomplete>
    
          </v-layout>
       <!-- <v-divider class="my-2"></v-divider> -->
    
       <!-- <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12>
            <h1>Summary Maps</h1>
          </v-flex>
          <v-radio-group v-model="select.type" @change="filterStatus">
            <v-radio color="blue" label="All" value="all"></v-radio>
            <v-radio
              color="green"
              label="Area"
              value="Apartment"
            ></v-radio>
            <v-radio
              color="green"
              label="Owners"
              value="Residential"
            ></v-radio>
            
          
          </v-radio-group>
        </v-layout> -->

        <!-- <v-divider class="my-2"></v-divider> -->

        <!-- <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12>
            <h1>Status</h1>
          </v-flex>
          <v-radio-group v-model="select.status" @change="filterStatus">
            <v-radio color="blue" label="All" value="all"></v-radio>
            <v-radio color="green" label="Purchased" value="sold"></v-radio>
            <v-radio color="red" label="Unpurchased" value="select.blockunsold"></v-radio>
          </v-radio-group>
        </v-layout> -->

        <!-- <v-divider class="my-2"></v-divider>

        <v-layout row wrap class="ma-0 pa-2">
          <v-flex xs12>
            <h1>Moza</h1>
          </v-flex>
          <v-radio-group v-model="select.block" @change="filterStatus">
            <v-radio color="blue" label="All" value="all"></v-radio>
            <v-radio color="green" label="Sheikhpur" value="Sheikhpur"></v-radio>
            <v-radio color="green" label="Kak" value="Kak"></v-radio>
             </v-radio-group>
        </v-layout> -->

        <v-divider class="my-2"></v-divider>

        <v-layout row wrap class="ma-0 pa-2">
     
          <v-flex xs12>
            <h1>Base Maps</h1>
          </v-flex>
          <v-radio-group v-model="map.base.val">
            <v-radio 
              color="blue" 
              label="Street Map" 
              value="osm">
            </v-radio>
            <v-radio
              color="green"
              label="Satellite Map"
              value="satellite"
            ></v-radio>
            <v-radio
              color="red"
              label="Hide Basemap"
              value="nobasemap"
            ></v-radio>
          </v-radio-group>
        </v-layout>
      </div>
    </v-navigation-drawer>


    <!-- Client Form -->

    <v-dialog
      v-model="clientForm"
      persistent
      max-width="800px"
      max-height="500px"
      transition="dialog-transition"
    >
      <v-card>
 
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Client's Details</h3>
          <v-btn
                tile
                color="success"
                @click="editalert"
              >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                Edit
          </v-btn>
          <v-divider class="my-2"></v-divider>
          
             <v-flex>
                  <v-simple-table class="tableItem">
                <tbody>
                  <tr>
                    <th><h2>Client</h2></th>
                    <th><h2>Status</h2></th>
                    <th><h2>Started</h2></th>
                    <th><h2>Ends</h2></th>
                    <th><h2>Rates/Year</h2></th>
                  </tr>
                  <tr>
                    <td> <h4> <img src="Jazz.jpg" width="70px" height="50px"> </h4> </td> 
                    <td> <v-chip color="green">Working</v-chip> </td>
                    <td> Feb,2018 </td>
                    <td> Jun,2022</td>
                    <td> 0.9 Million</td>
                  </tr>
                  <tr>
                    <td> <h4> <img src="Zong.png" width="70px" height="50px"> </h4> </td> 
                    <td> <v-chip color="yellow">Leaving</v-chip> </td>
                    <td> Jun,2017 </td>
                    <td> Aug,2021</td>
                    <td> 1.3 Million</td>
                  </tr>
                  <tr>
                    <td> <h4> <img src="Telenor.jpg" width="70px" height="50px"> </h4> </td> 
                    <td> <v-chip color="red">Left</v-chip> </td>
                    <td> May,2014 </td>
                    <td> Nov,2020</td>
                    <td> 1.5 Million</td>
                  </tr>
                  
                </tbody>
          </v-simple-table>
                </v-flex>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="clientForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Maintanance From -->


     <v-dialog
      v-model="maintananceForm"
      persistent
      max-width="800px"
      max-height="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Maintanance Details</h3>
          <v-btn
                tile
                color="success"
                @click="editalert"
              >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                Edit
          </v-btn>
          <v-divider class="my-2"></v-divider>
          
            <v-flex>
                  <v-simple-table class="tableItem">
                <tbody>
                  <tr>
                    <th><h2>Equipment</h2></th>
                    <th><h2>Next Check</h2></th>
                    <th><h2>Last Checked</h2></th>
                    <th><h2>Technician</h2></th>
                    <th><h2>Contact #</h2></th>
                    <th><h2>Remarks</h2></th>
                  </tr>
                  <tr>
                    <td> Generator </td> 
                    <td> 10th Feb </td>
                    <td> 10th Jan </td>
                    <td> M. Munawar </td>
                    <td> 0123123456 </td>
                    <td> Satisfied </td>
                  </tr>
                  <tr>
                    <td> Batteries </td> 
                    <td> 10th Feb </td>
                    <td> 10th Jan </td>
                    <td> Zeeshan Ali </td>
                    <td> 0123123456 </td>
                    <td> Cells Issue </td>
                  </tr>
                  <tr>
                    <td> Air Conditioner </td> 
                    <td> 10th Feb </td>
                    <td> 10th Jan </td>
                    <td> Arsalan Ahmad </td>
                    <td> 0123123456 </td>
                    <td> Good </td>
                  </tr>
                </tbody>
                </v-simple-table>
                </v-flex>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="maintananceForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 

    <!-- Finance Form -->

    <v-dialog
      v-model="populationForm"
      persistent
      max-width="800px"
      max-height="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Finance Details of Income and Expenses (Rupees/Year)</h3>
          <v-btn
                tile
                color="success"
                @click="editalert"
              >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                Edit
          </v-btn>
          <v-divider class="my-2"></v-divider>
          
             <v-flex>
                  <v-simple-table class="tableItem">
                <tbody>
                  <tr> <td colspan="6" style="text-align:center; ">
                    <v-chip 
                    style="width: 220px; text-align:center; height: 40px;" 
                    color="#eb4634"
                    text-color="white"
                    ><h3 style="text-align:center;">Total Expenses: 2.6 Million</h3></v-chip></td> </tr>

                  <tr style="text-align:center; ">
                    <th><h2>Budget Year</h2></th>
                    <th><h2>Lease Cost</h2></th>
                    
                    <th><h2>Maintanance Cost</h2></th>
                    <th><h2>Security Cost</h2></th>
                    <th><v-chip color="#eb4634"><h2>Total Cost</h2></v-chip></th>
                    
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2018-2019  </td>
                    <td> 650,000  </td> 
                    <td> 120,000 </td>
                    <td> 100,000 </td>
                    <td> 910,000 </td>
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2019-2020  </td>
                    <td> 710,000  </td> 
                    <td> 130,000 </td>
                    <td> 140,000 </td>
                    <td> 980,000 </td>
                    
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2020-2021  </td>
                    <td> 520,000  </td> 
                    <td> 90,000 </td>
                    <td> 110,000 </td>
                    <td> 720,000 </td>
                  </tr>

                  <tr> <td colspan="6" style="text-align:center; ">
                    <v-chip 
                    style="width: 220px; text-align:center; height: 40px;" 
                    color="#239c0b"
                    text-color="white"
                    ><h3 style="text-align:center;">Total Income: 1.04 Million</h3></v-chip></td> </tr>

                  <tr style="text-align:center; ">
                    <th><h2>Budget Year</h2></th>
                    <th><h2>From Jazz</h2></th>
                    <th><h2>From Zong</h2></th>
                    <th><h2>From Ufone</h2></th>
                    <th><v-chip color="#239c0b"><h2>Income</h2></v-chip></th>
                    
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2018-2019  </td>
                    <td> 100,000  </td> 
                    <td> 90,000 </td>
                    <td> 110,000 </td>
                    <td> 300,000 </td>
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2019-2020  </td>
                    <td> 150,000  </td> 
                    <td> 160,000 </td>
                    <td> 170,000 </td>
                    <td> 480,000 </td>
                  </tr>
                  <tr style="text-align:center; ">
                    <td> 2020-2021  </td>
                    <td> 70,000  </td> 
                    <td> 100,000 </td>
                    <td> 90,000 </td>
                    <td> 260,000 </td>
                  </tr>
                </tbody>
                </v-simple-table>
                </v-flex>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="populationForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  <!-- Equipment Form -->

  <v-dialog
      v-model="equiptmentForm"
      persistent
      max-width="800px"
      max-height="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Equipment Details</h3>
          <v-btn
                tile
                color="success"
                @click="editalert"
              >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                Edit
          </v-btn>
          <v-divider class="my-2"></v-divider>
          
            <v-flex>
                  <v-simple-table class="tableItem">
                <tbody>
                  <tr>
                    <th><h2>Name</h2></th>
                    <th><h2>Model</h2></th>
                    <th><h2>Purchased</h2></th>
                    <th><h2>Price</h2></th>
                    <th><h2>Capicity</h2></th>
                    <th><h2>Remarks</h2></th>
                  </tr>
                  <tr>
                    <td> Generator </td> 
                    <td> Jasco CST </td>
                    <td> Feb, 2016 </td>
                    <td> 4.4 Million </td>
                    <td> 275 kVa </td>
                    <td> Normal </td>
                  </tr>
                  <tr>
                    <td> Batteries </td> 
                    <td> Lithium Ion </td>
                    <td> Jan 2012 </td>
                    <td> 1.4 Million </td>
                    <td> 48V </td>
                    <td> Critical </td>
                  </tr>
                  <tr>
                    <td> Air Conditioner </td> 
                    <td> Samsung </td>
                    <td> Aug 2017 </td>
                    <td> 70,000 </td>
                    <td> 1 Ton </td>
                    <td> Good </td>
                  </tr>
                  <tr>
                    <td> Solar Panel </td> 
                    <td> Tesla </td>
                    <td> May 2014 </td>
                    <td> 25,000 </td>
                    <td> 1 KW </td>
                    <td> Satisfied </td>
                  </tr>
                </tbody>
                </v-simple-table>
                </v-flex>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="equiptmentForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 

 

  <!-- Property Form -->

  <v-dialog
      v-model="propertyForm"
      persistent
      max-width="800px"
      max-height="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Property Details</h3>
          <v-btn
                tile
                color="success"
                @click="editalert"
              >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                Edit
          </v-btn>
          <v-divider class="my-2"></v-divider>
          
          <v-flex>
                  <v-simple-table class="tableItem">
                <tbody>
                  <tr>
                    <th><h2>Land Status</h2></th>
                    <th><h2>Owner Name</h2></th>
                    <th><h2>Leased Period</h2></th>
                    <th><h2>Rates/year</h2></th>
                    <th><h2>Contact#</h2></th>
                  </tr>
                  <tr>
                    <td> Leased </td> 
                    <td> Mujtba Qurashi </td>
                    <td> 10 Years </td>
                    <td> 0.7 Million </td>
                    <td> 051-4234235 </td>
                  </tr>
                  </tbody>
                </v-simple-table>
                </v-flex>

        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="propertyForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 

  <!-- Login Page -->

  <v-dialog
      v-model="loginForm"
      persistent
      max-width="500px"
      max-height="200px"
      transition="dialog-transition"
    >
      <v-card>
        <v-container grid-list-xs>
          <h3 style="text-align:center;">Member Login</h3>
          <v-divider class="my-2"></v-divider>
          
          <v-flex>
            <v-container>
                <v-layout row class="text-xs-center">
                  
                  <v-flex xs class="grey lighten-4">
                    <v-container style="position: relative;top: 13%;" class="text-xs-center">
                      <v-card flat>
                        <v-card-title primary-title>
                          <h4>Login</h4>
                        </v-card-title>
                        <v-form>
                        <v-text-field style="text-align:center;" name="Username" label="Username"></v-text-field>
                        <v-text-field  name="Password" label="Password" type="password"></v-text-field>
                        <v-card-actions>
                          <v-btn primary large block @click="sorrywarning">Login</v-btn>
                        </v-card-actions>
                        </v-form>
                      </v-card>
                    </v-container>
                  </v-flex>
                </v-layout>
           </v-container>        
          </v-flex>

        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text class="px-2" @click="loginForm = false"
            >Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 
   
   


  </nav>
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
      loginForm: false,
      equiptmentForm: false,
      propertyForm: false,
      moniteringForm: false,
      maintananceForm: false,
      clientForm: false,
      populationForm: false,
      region_id: "",
      block: "",
      plotID: "",
      dealID:"",
      select: {
        block: "all",
        region_id: "all",
        status: "all",
        type: "all",
        dimensions: "all"
      },
      
      CityName: ['Islamabad'],
      regions: ['ISB_A','ISB_B','ISB_C','ISB_D','ISB_E','ISB_F','ISB_G'],
      towerlist: [1,
69,
84,
541,
560,
573,
1011,
1201,
1213,
1216,
1427,
1441,
1479,
1479,
1479,
1485,
1541,
1546,
1598,
1601,
1827,
1879,
1879,
1879,
1885,
1908,
1998,
2053,
2146,
2157,
2288,
2290,
2382,
2386,
2416,
2460,
2478,
2496,
2541,
2786,
2816,
2827,
2860,
2860,
2878,
3005,
3013,
3021,
3039,
3098,
3111,
3257,
3288,
3541,
3573,
3743,
3792,
3830,
3856,
3923,
3948,
3966,
3973,
4001,
4007,
4013,
4014,
4032,
4039,
4040,
4041,
4078,
4079,
4165,
4193,
4201,
4276,
4306,
4427,
4427,
4479,
4479,
4479,
4485,
4546,
4555,
4556,
4776,
4780,
4785,
4788,
4794,
4812,
4869,
4871,
4872,
4873,
4875,
4879,
4881,
4888,
4896,
4986,
5087,
5175,
5222,
5278,
5287,
5293,
5313,
5377,
5382,
5386,
5416,
5429,
5430,
5431,
5459,
5460,
5460,
5473,
5478,
5489,
5551,
5553,
5554,
5556,
5557,
5559,
5561,
5566,
5571,
5857,
5860,
5861,
6147,
6500,
8009,
8033,
8034,
8039,
8040,
8042,
8082,
8162,
8270,
8369,
8556,
8558,
8606,
8782,
8783,
8785,
8794,
8799,
8832,
8852,
8854,
8869,
8885,
8964,
8986,
9035,
9226,
9228,
9255,
9285,
9301,
9427,
9429,
9430,
9449,
9542,
9543,
9691,
9816,
9846,
9858,
9860,
9885,
9888,
9986,
9996,
50094,
50319,
50450,
50724,
50743,
50757,
50819,
50828,
50866,
50925,
111467,
112792,
840226,
],
      // To link utility switch with utilities layer
      switchstatus:true,
    };
  },
  computed: {
    ...mapGetters([
      "getLoading",
      "getTheme",
      "getLeftDrawer",
      "getRightDrawer",
      "getInfoDialog",
      "getMap",
      "getZoom",
      "getPlotCenter",
      "getSnackbar",
      "getSnackbarText",
      "getSnackbarColor",
      "getPlotInfoSkeleton",
      "getSummary",
      "getBlockList",
      "getPlotList",
      "getDealList",
      "getPlotInfo",
      "get3DPlots",
      "getLayerVisibility"
    ])
  },
  methods: {

                
    sorrywarning(){
      return alert('Sorry! This Function is not Currently available.')
    },
    editalert(){
      return alert('Please Login First')
    },
    
    say: function (msg) {
      alert(msg)
    },
    toggleLayers(){
      this.$store.commit("setLayerVisibility", !this.getLayerVisibility);
      },
    toggle3DMap() {
      this.map.show3D = !this.map.show3D;
    },
    toggleLeftDrawer() {
      this.$store.commit("setLeftDrawer", !this.getLeftDrawer);
    },
    toggleRightDrawer() {
      this.$store.commit("setRightDrawer", !this.getRightDrawer);
    },
    toggleTheme() {
      this.$store.commit("setTheme", !this.getTheme);
    },
    toggleInfoDialog() {
      this.$store.commit("setInfoDialog", !this.getInfoDialog);
    },
    closeSnackbar() {
      this.$store.commit("setSnackbar", false);
    },
    resetSelect() {
      this.CityName = "";
      this.region_id = "";
      this.towerID = "";
      this.block = "";
      this.plotID = "";
      this.dealID = "";
      this.select.block = "all";
      this.select.status = "all";
      this.select.type = "all";
      this.select.dimensions = "all";
      this.fetchPlotList();
      this.fetchDealList();
    },

   
    fetchPlotList() {
      if (this.region_id != "") {
        this.$store.dispatch("fetchPlotList", {
          url: this.api.url,
          region_id: this.block
        });
        this.$store.dispatch("fetchDealList", {
          url: this.api.url,
          block: this.block
        });
        
      }
      this.$store.dispatch("fetchPlots", {
        url: this.api.url,
        params: {
          block: this.block,
          status: this.api.filter.status,
          type: this.api.filter.type,
          dimensions: this.api.filter.dimensions
        }
      });
    },

    fetchTowerInfo() {
      this.$store.commit("setPlotInfoSkeleton", true);
      this.$store.dispatch("fetchTowerInfo", {
        // v-for="Tower in map.Tower.features"
        url: this.api.url,
        id: this.towerID
      });
      
      this.$store.commit("setInfoDialog", !this.getInfoDialog);
    },

    fetchDealInfo() {
      // this.$store.commit("setPlotInfoSkeleton", true);
      this.$store.dispatch("fetchDealInfo", {
        url: this.api.url,
        id: this.dealID
      });
      // this.$store.commit("setInfoDialog", !this.getInfoDialog);
    },



    filterStatus() {
      this.$store.dispatch("fetchPlots", {
        url: this.api.url,
        params: {
          block: this.select.block == "all" ? "" : this.select.block,
          status: this.select.status == "all" ? "" : this.select.status,
          type: this.select.type == "all" ? "" : this.select.type,
          dimensions: this.select.dimensions == "all" ? "" : this.select.dimensions
        }
      });
    }
  },
  mounted() {
    this.$store.dispatch("fetchSummary", { url: this.api.url });
    
  }
};
</script>

<style>

.selector {
  width: 20px;
}
.tableItem {
  text-transform: capitalize;
}

</style>
