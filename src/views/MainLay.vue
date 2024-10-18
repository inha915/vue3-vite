<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>My Application</v-app-bar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" color="grey lighten-2" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />
      <!-- HomeView 내용이 이곳에 렌더링 됩니다 -->
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <span>&copy; 2024 My Application</span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>
