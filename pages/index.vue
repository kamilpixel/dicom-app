<template>
  <b-container class="pb-5">
    <b-row>
      <b-col>
        <b-card 
          header="Patient Data List" 
          class="w-100"
        >
          <!-- table skeleton -->
          <div v-if="isLoading">
            <b-skeleton-table
              :rows="5"
              :columns="6"
              :table-props="{ bordered: true, striped: true }"
            ></b-skeleton-table>
          </div>
          <!-- table list -->
          <div v-else>
            <b-table 
              hover 
              :items="items" 
              :fields="fields" 
              responsive
              :per-page="perPage"
              :current-page="currentPage"
              stacked="sm"
              head-variant="light"
              outlined
            >
              <!-- cell DOB -->
              <template #cell(patientBirthDate)="data">
                {{  $formatDate(data.item.patientBirthDate) }}
              </template>

              <!-- button action -->
              <template #cell(actions)="data">
                <b-button 
                  type="button" 
                  variant="primary"
                  @click="onClickDetail(data)"
                >View Details</b-button>
              </template>
            </b-table>

            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              align="center"
            ></b-pagination>
          </div>

        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MainNavBar from '@/components/MainNavBar.vue';
export default {
  name: 'PatientsList',
  head: {
    title: 'Patients List',
  },
  components: { MainNavBar },
  data(){
    return {
      fields: [
        { key: 'patientID', label: 'ID', },
        { key: 'patientName', label: 'Name', },
        { key: 'patientBirthDate', label: 'Date of Birth', },
        { key: 'patientSex', label: 'Gender', },
        { key: 'actions', label: 'Actions', },
      ],
      items: [],
      perPage: 10,
      currentPage: 1,
      rows: 0,
      isLoading: true,
    }
  },
  methods: {
    async getPatientsList () {
      try {
        this.isLoading = true;
        const response = await this.$store.dispatch('patients/getList');
        this.items = response.data;
        this.rows = response.data.length;
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false;
      }
    },
    onClickDetail(evt){
      this.$router.push({
        name: 'patients-detail',
        query: {
          index: evt.index,
        },
      });
    },
  },
  async mounted(){
    await this.getPatientsList();
  },

}
</script>

