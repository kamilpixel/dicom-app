<template>
  <div class="mb-2 w-100 text-center">
    <div class="d-flex">
      <b-skeleton type="avatar" size="4em"></b-skeleton>
    </div>
    <div class="mt-3">
      <b-skeleton animation="wave" width="85%"></b-skeleton>
      <b-skeleton animation="wave" width="35%"></b-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'patientInfoSkeleton',
}
</script>

<style>

</style>