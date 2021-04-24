<template>
    <div class="geo">
        This is the geolocation page.
        <br />
        <div>Accuracy is {{acc}}</div>
        <div>Longitude is {{longitude}}</div>
        <div>latitude is {{latitude}}</div>
        <div>
        <button class="btn btn-primary" @click='getGeo'>getCurrentPosition</button>
        </div>
        <br />
        <div>
            <button class="btn btn-primary" @click="watchGeo">watch geo</button>
        </div>
        <br />
        <div>
            <button class="btn btn-primary" @click="cancelWatch">Cancel watching</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"geo",
    data: function(){
        return{
            watchid:"",
            latitude:"null",
            acc: "null",
            longitude: "null",
        }
    },
    methods:
    {
        getGeo: function() //get users' geolocation.
        {
            const successCallBack = (position) => {
                console.log(position) //get latitude.
                //this is how u get the data.
                this.acc=position.coords.accuracy;
                this.latitude=position.coords.latitude;
                this.longitude=position.coords.longitude;
            }
            const errorCallBack= (error) => {
                console.error(error);
            }
            //navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
            navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack,{
                enableHighAccuracy: true, //maybe more power consumption.
                timeout: 5000 //if it takes more than 5 seconds retrieving
            });
        },

        watchGeo: function()
        {
            const successCallBack = (position) => {
                console.log(position);
                //update geo info
                this.acc=position.coords.accuracy;
                this.latitude=position.coords.latitude;
                this.longitude=position.coords.longitude;
            }
            const errorCallBack= (error) => {
                console.error(error);
            }
            this.watchid = navigator.geolocation.watchPosition(successCallBack,errorCallBack);
        },

        cancelWatch:function()
        {
            this.acc="null";
            this.latitude="null";
            this.longitude="null";
            navigator.geolocation.clearWatch(this.watchid); 
        }
    }
}
</script>