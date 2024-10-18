<template>
  <MainLay>
    <div>
      <div class="d-flex justify-space-around align-center py-4">
        <v-btn
          icon="mdi-minus"
          variant="text"
          @click="model = Math.max(model - 1, 0)"
        ></v-btn>
        {{ model }}
        <v-btn
          icon="mdi-plus"
          variant="text"
          @click="model = Math.min(model + 1, 4)"
        ></v-btn>
      </div>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
          <v-sheet :color="color" height="300px" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </MainLay>
</template>

<script setup>
import { ref } from "vue";
import MainLay from "@/views/MainLay.vue"; // 올바른 경로로 변경

const model = ref(0);
const colors = ["red", "blue", "green", "yellow", "purple"];
</script>
