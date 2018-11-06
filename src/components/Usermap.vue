<template>
<div>
    <GmapMap
  v-bind:center="center"
  v-bind:zoom="11"
  map-type-id="terrain"
  style="
  
  
  width: 100vw; 
  height: 80vh; 
  align-items: center;
    "
>
  <GmapMarker
    v-bind:key="index"
    v-for="(m, index) in markers"
    v-bind:position="m.position"
    v-bind:clickable="true"
    v-bind:draggable="true"
    @click="center=m.position"
  />
</GmapMap>
</div>
</template>

<script>
export default {
    data() {
        return {
            center:{lat:37.5000621, lng:126.5270931},
            markers: [
                {
                    position: {lat:37.496072, lng:126.613060}
                },
                {
                    position: {lat:37.457276, lng:126.594488}
                }
            ]
        }
    }
}
</script>

<style>

</style>
