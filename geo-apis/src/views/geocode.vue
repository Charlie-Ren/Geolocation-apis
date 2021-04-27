<template>
    <div class="geocode">
        This is geocode.
    <div>
        <input class="form-control" aria-label="Large" v-model="location" placeholder="Type your address" id="autocomplete">
    </div>
    <div>
        <button @click="geoCodeFunction">Submit</button>
    </div>
    <div>{{formatted_address}}</div>
    <li v-for="(v,k,index) in result" :key=index>
        {{k}}:{{v}}
    </li>
    </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHki8t8Ayr63B9HcVIG5g3cf7QnbrX2QM"></script>
<script>
import axios from 'axios';
export default {
    name: "geocode",
    data: function(){
        //console.log(this.$root.api_key);
        return{
            location: "",
            result:"",
            formatted_address: "",
        }
    },
    //autocomplete part.
    mounted()
    {
        new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            {
                bounds: new google.maps.LatLngBounds(
                    new google.maps.LatLng(42.0266573,-93.64645159999999)
                )
            }
        )
    },
    methods:{
        geoCodeFunction: function()
        { 
            //how we use geocode api here.
            //using axios to send    HTTP request
            axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
                params:{
                    address: this.location,
                    key: this.$root.api_key,
                }
            })
            .then((response)=>{
                console.log(response.data);
                if(response.data.status=="OK")
                {
                    this.formatted_address=response.data.results[0].formatted_address;//get its formatted address
                    this.result=response.data.results[0].geometry.location;//get its location info
                    //U can also try to grab other infos.
                }
                else
                {
                    this.formatted_address="No matching info";
                    this.result={lat:"null", lng:"null"};
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }


}
</script>