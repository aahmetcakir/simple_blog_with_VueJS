<template>
  <div>
    <figure class="flex">
      <img :src="image" alt="img" class="container" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["image"],
  name: "Picture",
};
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 600px;
  max-height: 400px;
}
</style>