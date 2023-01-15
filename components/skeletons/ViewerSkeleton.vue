<template>
  <div>
    <b-row class="mb-3">
      <b-col md="4" class="mb-2 mb-md-0">
        <div>Study Date</div>
        <b-skeleton animation="wave" width="45%"></b-skeleton>
      </b-col>
      <b-col md="4" class="mb-2 mb-md-0">
        <div>Study Time</div>
        <b-skeleton animation="wave" width="30%"></b-skeleton>
      </b-col>
      <b-col md="4" class="mb-2 mb-md-0">
        <div>Accession Number</div>
        <b-skeleton animation="wave" width="25%"></b-skeleton>
      </b-col>
    </b-row>
    <div>
      <b-skeleton-img no-aspect height="450px"></b-skeleton-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewerSkeleton',
}
</script>

<style>

</style>