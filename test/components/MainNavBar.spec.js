import { createLocalVue, shallowMount } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import MainNavBar from '@/components/MainNavBar.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('MainNavBar component', () => {
  it('render MainNavBar component', () => {
    const wrapper = shallowMount(MainNavBar, { localVue });
    expect(wrapper.exists()).toBe(true);
  });
});