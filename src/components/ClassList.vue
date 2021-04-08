<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Show All Classes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(theClass, index) in classes"
          :key="index"
          @click="setActiveClass(theClass, index)"
        >
          {{ theClass.className }}
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <div v-if="currentClass">
        <h4>Class</h4>
        <div>
          <label>
            <strong>Class Name</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="course_id"
            v-model="currentClass.className"
          />
          <!-- {{ currentCourse.code }} -->
        </div>
        <div>
          <label>
            <strong>Section:</strong>
          </label>
          <input
            type="text"
            class="form-control"
            id="course_title"
            v-model="currentClass.classSection"
          />
          <!-- {{ currentCourse.title }} -->
        </div>
        <button class="m-3 btn btn-sm btn-danger" @click="deleteClass">
          Delete
        </button>
        <button class="m-3 btn btn-sm btn-danger" @click="saveClass">
          Update
        </button>
      </div>
      <div v-else>
        <br />
        <p v-if="classes">Please click on a Class...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ClassDataService from "../services/ClassDataService";

export default {
  name: "classes-list",
  data() {
    return {
      classes: [],
      currentClass: null,
      currentIndex: -1,
    };
  },

  methods: {
    saveClass() {
      ClassDataService.save(this.currentClass)
        .then((response) => {
          // this.refreshList();
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteClass() {
      ClassDataService.delete(this.currentClass.id)
        .then((response) => {
          this.refreshList();
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveClass(theClass, index) {
      this.currentClass = theClass;
      this.currentIndex = index;
    },
    refreshList() {
      this.currentClass = null;
      this.currentIndex = -1;
      ClassDataService.get("")
        .then((response) => {
          this.classes = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },

  mounted() {
    ClassDataService.get("")
      .then((response) => {
        this.classes = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
