<template>
  <div>
    <h3>detay sayfası</h3>
    <Post
      :title="this.$store.state.contents[$route.params.id].content.title"
      :src="this.$store.state.contents[$route.params.id].content.src"
      :content="this.$store.state.contents[$route.params.id].content.article"
    />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "Posts",
  components: {
    Post,
  },
};
</script>

<style>
</style>