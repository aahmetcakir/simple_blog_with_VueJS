<template>
  <div>
    <Container>
      <Title> {{ title }} </Title>
      <Picture :image="src" />
      <Content>
        {{ content }}
        <router-link tag="p" :to="`/posts/post/${id}`">
          <a> detaya git </a>
        </router-link>
      </Content>
    </Container>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Container from "@/components/Container.vue";
import Picture from "@/components/Picture.vue";
import Content from "@/components/Content.vue";
export default {
  name: "Post",
  props: ["title", "src", "content", "id"],
  components: {
    Title,
    Picture,
    Container,
    Content,
  },
};
</script>

<style>
</style>