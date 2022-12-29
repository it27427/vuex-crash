import { EmployeeService } from "@/services/EmployeeService";

export default {
  namespaced: true,
  state: {
    employeeList: {
      employees: EmployeeService.getAllEmployees(),
    },
  },
  mutations: {
    updateSelected: (state, payload) => {
      state.employeeList.employees = state.employeeList.employees.map(
        (employee) => {
          if (employee.id === payload.empId) {
            return {
              ...employee,
              isSelected: !employee.isSelected,
            };
          } else {
            return employee;
          }
        }
      );
    },
  },
  actions: {
    changeSelected: ({ commit }, payload) => {
      return commit("updateSelected", payload);
    },
  },
};
