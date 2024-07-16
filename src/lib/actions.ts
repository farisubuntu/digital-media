"use server";

import { revalidatePath } from "next/cache";
import { getEmployee, getEmployeeCustomers } from "./utils/employeeUtils";

export async function actionGetEmployee(id: number) {
  const result = await getEmployee(id);
  return result;
}

export async function actionGetEmployeeCustomers(id: number) {
  const result = await getEmployeeCustomers(id);
  return result;
}
