<template>
  <div>
    <Container size="600">
      <article class="p">
        <slot />
      </article>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  props: ["content"],
  components: {
    Container,
  },
};
</script>

<style scoped>
.p {
  padding-left: 4px;
  padding-right: 4px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>