<template>
  <div>
    <main-nav-bar />
    <b-container class="mt-4" fluid>
      <b-col>
        <b-row>
          <Nuxt />
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import MainNavBar from '@/components/MainNavBar.vue';

export default {
  name: 'layoutDefault',
  components: { MainNavBar },
}
</script>

<style>

</style>