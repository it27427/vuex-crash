<script>
export default {
  name: "EmployeesComponent",
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          isSelected: false,
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          isSelected: false,
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          isSelected: false,
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          isSelected: false,
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    updateSelected(empId) {
      this.employees = this.employees.map((employee) => {
        if (employee.id === empId) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else {
          return employee;
        }
      });
    },
  },
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
              v-for="employee in employees"
              :key="employee.id"
              class="list-group-item list-group-item-success"
            >
              <input
                type="checkbox"
                :id="`emp-${employee.id}`"
                class="checkfield"
                @change="updateSelected(employee.id)"
                hidden
              />
              <label :for="`emp-${employee.id}`" class="customcheck">
                {{ employee.name }}
              </label>
            </li>
          </ul>
        </div>

        <div class="col-md-6">
          <div v-for="employee of employees" :key="employee.id">
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
