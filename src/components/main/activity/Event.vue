<script setup>
import subHeading from '@/components/main/activity/parts/subHeading.vue';
import Chronology from '@/components/main/activity/parts/eventChronology.vue';
</script>

<template>
  <section class="event">
    <div class="event__container">
      <subHeading thisTextEn="event" thisTextJa="年間行事" class="event__heading" />
      <Chronology />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.event {
  margin-top: 30px;
}
</style>
