"use server";

import { revalidatePath } from "next/cache";
import { getEmployee, getEmployeeCustomers } from "./utils/employeeUtils";

export async function actionGetEmployee(id: number) {
  try {
    const result = await getEmployee(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function actionGetEmployeeCustomers(id: number) {
  try {
    const result = await getEmployeeCustomers(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}
