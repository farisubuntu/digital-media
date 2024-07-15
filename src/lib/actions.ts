"use server";
import { tursoClient } from "./turso";
import { getEmployee, getEmployeeCustomers } from "./utils/employeeUtils";

export async function actionGetEmployee(id: number) {
  return await getEmployee(id);
}

export async function actionGetEmployeeCustomers(id: number) {
  return await getEmployeeCustomers(id);
}
