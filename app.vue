
<script setup >
useHead({
  title: "Animal Shelter"
});

</script>

<template>
  <div class="main_layout" ref="main">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@media (min-width: 1280px) {
  .main_layout {
    max-width: 1280px;
    width: 100%;
    height: 100%;
  }
}

@media (min-width:768px) and (max-width: 1280px) {
  .main_layout {
    max-width: 768px;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .main_layout {
    max-width: 320px;
    width: 100%;
    height: 100%;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>


