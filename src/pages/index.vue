<template>
  <div class="app">
    <div class="actions">
      <button @click="show('Park')" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#parkModal">Park</button>
      <button @click="show('Unpark')" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#parkModal">Unpark</button>
      <button @click="addEntrance" type="button" class="btn btn-secondary">Add Entrance</button>
    </div>
    <div class="parking-slot mb-3">
      <div class="parking-cont">
        <div class="entrance">A</div>
        <div class="slot">
          <Parking v-for="p in park[0]" :key="p.id" :park="p" :selectedVehicle="parkInfo" />
        </div>
        <div v-show="entranceCount > 0" class="entrance">D</div>
      </div>
      <div class="parking-cont">
        <div class="entrance">B</div>
        <div class="slot">
          <Parking v-for="p in park[1]" :key="p.id" :park="p" :selectedVehicle="parkInfo" />
        </div>
        <div v-show="entranceCount > 1" class="entrance">E</div>
      </div>
      <div class="parking-cont">
        <div class="entrance">C</div>
        <div class="slot">
          <Parking v-for="p in park[2]" :key="p.id" :park="p" :selectedVehicle="parkInfo" />
        </div>
        <div v-show="entranceCount > 2" class="entrance">F</div>
      </div>
    </div>
    <div class="parkingInformation">
      <p><b>Parking Information</b></p>
      <p>Plate Number: {{ parkInfo?.plateNumber }}</p>
      <p>Vehicle Type: {{ vehicleType(parkInfo?.vehicleType) }}</p>
      <p>Parking Size: {{ parkingSize(parkInfo?.parkSize) }}</p>
      <p>Entrance: {{ parkInfo?.entrance }}</p>
      <p>Time In:  {{ parkInfo?.timeIn }}</p>
      <p>Returning:  {{ parkInfo?.returning }}</p>
    </div>
    <Modal :modalTitle="modalTitle" :entrance="entrance" />
  </div>
</template>

<script>
import Parking from "@/components/Slot";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
    Parking
  },
  data() {
    return {
      modalTitle: null,
      entrance: ['A', 'B', 'C'],
      park: this.generate(),
      vehiclesParked: [],
      entranceCount: 0,
      parkInfo: null
    }
  },
  methods: {
    show(action) {
      this.modalTitle = action
      this.parkInfo = null
    },
    addEntrance() {
      switch(this.entranceCount) {
        case 0:
          this.entrance.push('D')
          break;
        case 1:
          this.entrance.push('E')
          break;
        case 2:
          this.entrance.push('F')
          break;
        default:
          alert('You have reached the maximum entrance allowed.')
      }
      this.entranceCount++
    }
  }
}
</script>

<style lang="scss">
.app {
  max-width: 1080px;
  margin: auto;
  .actions {
    padding: 50px 18px 50px 0;
    button {
      margin-right: 10px;
    }
  }
  .parking-slot {
    display: flex;
    justify-content: space-around;
    height: 300px;
    .parking-cont {
      width: 350px;
      .entrance {
        text-align: center;
        text-transform: capitalize;
        background-color: dodgerblue;
        padding: 12px;
        color: #fff;
        width: 40px;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 12px;
      }
      .slot {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
    }
  }
  .parkingInformation {
    margin-top: 20px;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
