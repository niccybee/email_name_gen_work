<template>
  <div id="app" class="flex flex-column">
    <h1>Email Name Generator</h1>
    <div id="form" class="flex items-center justify-center ba pa2 ma2">
      <div id="course-selector" class>
        <div
          id="course"
          v-for="course in courses"
          :key="course.value"
          class="flex flex-column items-start justify-start ma1"
        >
          <label
            :for="course.name"
            class="flex justify-start items-center pl2 pa1 ba hover-bg-light-green w4"
          >
            <input
              type="checkbox"
              :name="course.name"
              :id="course.name"
              :value="course.name"
              v-model="selectedCourses"
            >
            <span class="pl2">{{course.name}}</span>
          </label>
        </div>
      </div>
      <div class="ma2">
        <input type="text" v-model="campaignCode" placeholder="Campaign Code" class="pa2">
      </div>
      <select v-model="selectedType">
        <option disabled value>Please select one</option>
        <option v-for="type in emailType" :key="type.name">{{type.name}}</option>
      </select>
      <div class="ma2 pa2">
        <input class="w2 pa1" type="number" name id placeholder="number" v-model="emailNumber">
      </div>
    </div>
    <div
      id="copy-section"
      class="ma2 ba pa4 f3 hover-bg-light-yellow pointer"
      v-clipboard:copy="courseCombined"
      v-clipboard:success="copySuccess"
      v-clipboard:error="copyError"
    >{{courseCombined}}</div>
  </div>
</template>

<script>
import tachyons from "tachyons";

export default {
  name: "App",
  components: {},
  data() {
    return {
      courses: [
        { name: "PTE", value: "pte", selected: false },
        { name: "OET", value: "oet", selected: false },
        { name: "IELTS-A", value: "ieltsg", selected: false },
        { name: "IELTS-G", value: "ieltsa", selected: false },
        { name: "TOEFL", value: "toefl", selected: false },
        { name: "ALL", value: "all", selected: false }
      ],
      emailType: [
        { name: "Conversion", value: "conv" },
        { name: "Upsell", value: "upsell" },
        { name: "Info", value: "info" }
      ],
      campaignCode: "",
      selectedCourses: [],
      selectedType: "",
      emailNumber: 1
    };
  },
  computed: {
    courseCombined: function() {
      let combined =
        "[" +
        this.selectedCourses +
        " - " +
        this.campaignCode +
        "] - " +
        this.selectedType +
        " - " +
        this.emailNumber;
      return combined;
    }
  },
  methods: {
    copySuccess: function() {
      console.log("success");
      this.$toasted.show("Copy Successfully");
    },
    copyError: function() {
      console.log("failure");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import "tachyons";
</style>
