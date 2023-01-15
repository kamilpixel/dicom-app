<template>
  <b-container class="pb-5">
    <b-row>
      <b-col md="4">
        <b-card  header="Patient Info" class="mb-4">
          <PatientInfoSkeleton v-if="isLoading"/>
          <div class="mb-2 w-100 text-center" v-else>
            <b-avatar variant="dark" size="4em" />
            <div class="mt-3">
              <div>{{ $lodash.get(currentPatientData,'[0].patientName', '') }}</div>
              <b-badge variant="light">{{ $lodash.get(currentPatientData,'[0].patientID', '') }}</b-badge>
            </div>
          </div>
        </b-card>

        <b-card header="Studies">
          <StudiesSkeleton v-if="isLoading"/>
          <b-table
            v-else
            :fields="studiesFields" 
            :items="currentPatientData" 
            stacked
            no-border-collapse
            borderless
          />
        </b-card>
      </b-col>

      <b-col md="8" class="mt-4 mt-md-0">
        <b-card header="Viewer" class="mb-4">
          <ViewerSkeleton v-if="isLoading" />
          <div v-else>
            <b-row class="mb-3">
              <b-col md="4" class="mb-2 mb-md-0">
                <div>Study Date</div>
                <div class="font-weight-bold">{{ $lodash.get(currentPatientData,'[0].studyDate', '') || '-' }}</div>
              </b-col>
              <b-col md="4" class="mb-2 mb-md-0">
                <div>Study Time</div>
                <div class="font-weight-bold">{{ $lodash.get(currentPatientData,'[0].studyTime', '') || '-' }}</div>
              </b-col>
              <b-col md="4" class="mb-2 mb-md-0">
                <div>Accession Number</div>
                <div class="font-weight-bold">{{ $lodash.get(currentPatientData,'[0].accessionNumber', '') || '-' }}</div>
              </b-col>
            </b-row>
            <div>
              <b-img src="/images/sample.jpg" fluid alt="Sample image"></b-img>
            </div>
          </div>
        </b-card>
        <div>
          <b-button 
            variant="primary" 
            @click="onClickPrev"
            :disabled="disabledPrev"
          >Previous</b-button>
          <b-button 
            variant="primary" 
            @click="onClickNext"
            :disabled="disabledNext"
          >Next</b-button>
          <b-link to="/" class="btn btn-outline-primary">Back to Patients List</b-link>
        </div>
      </b-col>

    </b-row>

  </b-container>
</template>

<script>
import PatientInfoSkeleton from '@/components/skeletons/PatientInfoSkeleton.vue';
import StudiesSkeleton from '@/components/skeletons/StudiesSkeleton.vue';
import ViewerSkeleton from '@/components/skeletons/ViewerSkeleton';

export default {
  name: 'PatientDetail',
  head: {
    title: 'Patient Detail',
  },
  components: {
    PatientInfoSkeleton,
    StudiesSkeleton,
    ViewerSkeleton,
  },
  data(){
    return {
      patients: [],
      studiesFields: [
        { key: 'specificCharacterSet', label: 'Characters', },
        { key: 'queryRetrieveLevel', label: 'Query', },
        { key: 'modalitiesInStudy', label: 'Modalities', },
        { key: 'studyDescription', label: 'Description', },
        { key: 'studyInstanceUID', label: 'UID', },
      ],
      currentIndex: 0,
      currentPatientData: [],
      isLoading: true,
    };
  },
  computed: {
    disabledPrev(){
      return (this.currentIndex === 0 || this.isLoading);
    },
    disabledNext(){
      return (this.currentIndex === this.patients.length-1 || this.isLoading);
    },
  },
  methods: {
    async getPatientsList () {
      try {
        this.isLoading = true;
        const response = await this.$store.dispatch('patients/getList');
        this.patients = response.data;
        
        // reset to 0 if index more than current length
        this.currentIndex = (this.currentIndex > this.patients.length-1) ? 0 : this.currentIndex;

        // set first record
        this.currentPatientData = [this.patients[this.currentIndex]];

      } catch (err) {
        console.log(err);

      } finally {
        this.isLoading = false;
      }
    },
    onClickPrev(){
      this.currentIndex--;
      if(this.currentPatient === -1) this.currentIndex = 0;
      this.currentPatientData = [this.patients[this.currentIndex]];
    },
    onClickNext(){
      this.currentIndex++;
      this.currentPatientData = [this.patients[this.currentIndex]];
    },
  },
  async mounted(){
    // set initial index
    this.currentIndex = (this.$route.query.index) ? this.$route.query.index : 0;

    // fetch patients list
    await this.getPatientsList();
  },
}
</script>

<style>

</style>