<template>
  <b-navbar 
    toggleable 
    type="dark" 
    variant="dark" 
    class="main-navbar"
  >
    <b-navbar-brand href="/">DicomApp</b-navbar-brand>
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Patients List</b-nav-item>
        <b-nav-item href="/patients/detail">Patient Detail</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainNavBar'
}
</script>

<style>

</style>