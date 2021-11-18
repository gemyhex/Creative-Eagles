<template>
  <div class="header" v-if="deals">
    <Head :opp="deals.length"></Head>
  </div>
  <div class="cards row" v-if="deals">
    <div class="col-12">
      <div id="filters" class="filters mt-2">
        <button
          class="filter btn_t"
          v-for="(filter, index) in filters"
          :key="index"
          @click="applyFilter(filter)"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>
    <div
      v-for="d in filteredDeals"
      :key="d"
      class="col-lg-4 col-md-6 col-sm-12"
    >
      <opportunity :opp="d"></opportunity>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import opportunity from "./Opportunity.vue";
import Head from "../components/Head.vue";
export default {
  data() {
    return {
      deals: [],
      filteredDeals: [],
      isActive: false,
      filters: [
        {
          name: "all",
          key: "status",
          state: null,
        },
        {
          name: "active",
          key: "status",
          state: null,
        },
        {
          name: "coming_soon",
          key: "status",
          state: null,
        },
      ],
    };
  },

  methods: {
    applyFilter(filter) {
      filter.state != filter.state;
      if (filter.name.toLowerCase() === "all") {
        this.filteredDeals = this.deals;
      } else {
        this.filteredDeals = this.deals.filter(
          (deal) => deal.status.toLowerCase() == filter.name
        );
      }
      return this.filteredDeals;
    },
  },
  mounted() {
    // Get the container element
    var filters = document.getElementById("filters");

    // Get all buttons with class="btn" inside the container
    var links = filters.getElementsByClassName("btn_t");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
      });
    }
    this.filteredDeals = this.deals;
    axios
      .get("https://prime-crowd.com/api/mock/rounds")
      .then((res) => {
        this.deals = res.data;
        this.filteredDeals = this.deals;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  components: {
    opportunity,
    Head,
  },
};
</script>

<style lang="scss">
.header {
  border-bottom: 2px solid #e0d9d9;
}
.btn_t {
  margin: 0 6px;
  padding: 4px 8px;
  border: 0;
  background: transparent;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  color: #063847;
  mix-blend-mode: normal;
  opacity: 0.55;
  border-bottom: 2px solid transparent;
  &.active,
  &:hover {
    opacity: 1;
    border-bottom: 2px solid #063847;
  }
}
</style>
