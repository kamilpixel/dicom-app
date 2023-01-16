import { createLocalVue, shallowMount } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import PatientsPage from '@/pages/index.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const defaultOptions = { 
  localVue,
  mocks: {
    $store: {
      namespaced: true,
      dispatch: jest.fn(),
    },
  },
};

let wrapper;
const getPatientsListFn = jest.fn();
PatientsPage.methods.getPatientsList = getPatientsListFn;

describe('Patients Page', () => {
  beforeEach(() => {
    wrapper = shallowMount(PatientsPage, defaultOptions);
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.destroy();
  });

  it('renders Patients page', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls getPatientsList method', () => {
    expect(getPatientsListFn).toHaveBeenCalled();
  });
});