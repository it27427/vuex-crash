<script>
import { mapGetters } from "vuex";

export default {
  name: "EmployeesComponent",
  methods: {
    updateSelected(empId) {
      this.$store.dispatch("employeeModule/changeSelected", {
        empId: empId,
      });
    },
  },
  computed: mapGetters({
    employeeState: "getEmployeeState",
  }),
};
</script>

<template>
  <div class="employeescomp">
    <div class="container mb-5">
      <h3 class="text-success">Employees</h3>

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
      <div class="row g-4">
        <div class="col-md-6">
          <ul class="list-group">
            <li
              v-for="employee in employeeState.employees"
              :key="employee.id"
              class="list-group-item list-group-item-success"
            >
              <input
                type="checkbox"
                :id="`emp-${employee.id}`"
                class="checkfield"
                @change="updateSelected(employee.id)"
                :checked="employee.isSelected"
                hidden
              />
              <label :for="`emp-${employee.id}`" class="customcheck">
                {{ employee.name }}
              </label>
            </li>
          </ul>
        </div>

        <div class="col-md-6">
          <div v-for="employee of employeeState.employees" :key="employee.id">
            <div v-if="employee.isSelected" class="card border-0 mb-2">
              <div class="card-body list-group-item-success">
                <ul class="list-group">
                  <li class="list-group-item">
                    Id: <span class="fw-bold">{{ employee.id }}</span>
                  </li>
                  <li class="list-group-item">
                    Name: <span class="fw-bold">{{ employee.name }}</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">{{ employee.email }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
