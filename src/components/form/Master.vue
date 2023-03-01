<script setup>
import Header from '@/components/form/Header.vue';
import Footer from '@/components/form/Footer.vue';
</script>

<template>
  <Header />
  <slot name="main"></slot>
  <Footer />
</template>

<style lang="scss"></style>
