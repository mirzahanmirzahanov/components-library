<template>
  <div id="app">
    <v-select
      :options="selectOptions"
      @selectedOption="showSelectedOption"
      :selected="selected"
    />
  </div>
</template>

<script>
import VSelect from "@/components/VSelect.vue";

export default {
  components: { VSelect },
  data: () => ({
    selectOptions: [
      {name: "option 1", value: 1},
      {name: "option 2", value: 2},
      {name: "option 3", value: 3},
      {name: "option 4", value: 4},
      {name: "option 5", value: 5},
    ],
    selected:'select'
  }),
  methods:{
    showSelectedOption(option){
      this.selected = option.name
    }
  }
};
</script>

<style>
</style>