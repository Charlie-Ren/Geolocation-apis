<template>
    <div class="geocode">
        This is geocode.
    <div>
        <input v-model="location">
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
    methods:{
        geoCodeFunction: function()
        { 
            axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
                params:{
                    address: this.location,
                    key: this.$root.api_key,
                }
            })
            .then((response)=>{
                console.log(response.data);
                this.formatted_address=response.data.results[0].formatted_address;//get its formatted address
                this.result=response.data.results[0].geometry.location;//get its location info
                //U can also try to get other infos.
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }


}
</script>