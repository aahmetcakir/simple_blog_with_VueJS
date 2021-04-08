<template>
  <div>
    <div v-for="post in this.$store.state.contents" :key="post.id">
      <Post
        :title="post.content.title"
        :content="post.content.article"
        :src="post.content.src"
        :id="post.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post,
  },
};
</script>


