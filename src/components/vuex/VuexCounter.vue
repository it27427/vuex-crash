<script>
import { mapGetters } from "vuex";

export default {
  name: "VuexCounter",
  methods: {
    increment() {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    decrement() {
      this.$store.dispatch("counterModule/decrementCounter");
    },
    incrementBy(value) {
      this.$store.dispatch("counterModule/incrementCounterBy", {
        value: value,
      });
    },
  },
  computed: mapGetters({
    counterState: "getCounterState",
  }),
};
</script>

<template>
  <section class="counter pb-5">
    <div class="container mb-5">
      <h3 class="text-success">Counter</h3>

      <div class="row">
        <div class="col-lg-7 col-md-8 col-12">
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum
            ullam itaque quae quasi ex deserunt similique in perspiciatis! Iusto
            distinctio quisquam mollitia suscipit! Rerum cupiditate doloribus
            deserunt voluptas iure cumque in, natus ipsa magnam ex veniam
            aperiam temporibus ab recusandae. Placeat quam eaque dicta incidunt
            quibusdam! Recusandae doloremque unde pariatur ipsa repellat
            suscipit illo non.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0 shadow-lg">
            <div class="card-body">
              <h3 class="display-3">{{ counterState.count }}</h3>
              <div class="d-flex flex-wrap gap-2">
                <button @click="increment" class="btn btn-success">
                  Increment
                </button>
                <button @click="decrement" class="btn btn-warning">
                  Decrement
                </button>
                <button @click="incrementBy(5)" class="btn btn-danger">
                  Increment By
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
