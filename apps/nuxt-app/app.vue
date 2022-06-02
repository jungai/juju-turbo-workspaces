<template>
  <div>
    {{ msg }}
    {{ song }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { SongInfo } from "types";
const msg = ref("hello");
const song = reactive<SongInfo>({
  id: 1,
  name: "Darl+ling",
});
</script>
