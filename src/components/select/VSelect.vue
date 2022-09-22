<template>
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOptions(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  data: () => ({
    areOptionsVisible: false,
  }),
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectOptions(option) {
      this.$emit("selectedOption", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss" scoped>
.v-select {
  margin: 20px 0;
  width: 100%;
  max-width: 200px;
  p {
    text-align: center;
    cursor: pointer;
    padding: 10px;
  }
  .title {
    border: 1px solid #00d432;
    margin: 0 0 15px 0;
  }
  .options {
    border: 1px solid #00d432;
    :hover {
      background: #00d432;
    }
  }
}
</style>