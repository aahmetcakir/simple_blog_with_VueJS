<template>
  <div class="container" :style="{ maxWidth: size + 'px' }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["size"],
};
</script>

<style>
.container {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
}
</style>