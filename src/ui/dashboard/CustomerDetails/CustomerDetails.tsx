import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { employees, invoices, customers } from "@prisma/client";

const employeeLabels = {
  EmployeeId: "Employee ID",
  LastName: "Last Name",
  FirstName: "First Name",
  Title: "Depatment Title",
  ReportsTo: "Reports To",
  BirthDate: "Birth Date",
  HireDate: "Hire Date",
  Address: "Address",
  City: "City",
  State: "State",
  Country: "Country",
  PostalCode: "Postal Code",
  Phone: "Phone",
  Fax: "Fax",
  Email: "Email",
};

export default function CustomerDetails({ customer }: { customer: any }) {
  const customerInfo: customers = customer;
  
  const invoices: invoices[] = customer.Invoices;

  // console.log("invoices", invoices);
  return (
    <div className="form-wrapper flex flex-col p-2">
      <form
        id="view-customer-form"
        className="p-4 m-4 gap-2 bg-inherit text-inherit lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1"
      >
        <Fieldset
          className="space-y-8 flex flex-col border border-1 p-4"
          disabled
        >
          <Legend className="text-lg font-bold legend">Personal Details</Legend>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="firstName">
              First Name
            </Label>
            <Input
              className="mt-1 block w-full"
              id="firstName"
              name="firstName"
              defaultValue={customer.FirstName}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              className="mt-1 block w-full"
              id="lastName"
              name="lastName"
              defaultValue={customer.LastName}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="city">
              City
            </Label>
            <Input
              className="mt-1 block w-full"
              id="city"
              name="city"
              defaultValue={customer.City?.toString()}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="country">
              Country
            </Label>
            <Input
              className="mt-1 block w-full"
              id="country"
              name="country"
              defaultValue={customer.Country?.toString()}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="state">
              State
            </Label>
            <Input
              className="mt-1 block w-full"
              id="state"
              name="state"
              defaultValue={customer.State?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="company">
              Company
            </Label>
            <Input
              className="mt-1 block w-full"
              id="company"
              name="company"
              defaultValue={customer.Company?.toString()}
            />
          </Field>
        </Fieldset>
        <Fieldset
          className="space-y-8 flex flex-col border border-1 p-4"
          disabled
        >
          <Legend className="text-lg font-bold">Contact Details</Legend>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="phone">
              Phone
            </Label>
            <Input
              className="mt-1 block w-full"
              id="phone"
              name="phone"
              defaultValue={customer.Phone?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="email">
              Email
            </Label>
            <Input
              className="mt-1 block w-full"
              id="email"
              name="email"
              defaultValue={customer.Email}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="address">
              Address
            </Label>
            <Textarea
              className="mt-1 block w-full"
              id="address"
              name="address"
              defaultValue={customer.Address?.toString()}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="fax">
              Fax
            </Label>
            <Input
              className="mt-1 block w-full"
              id="fax"
              name="fax"
              defaultValue={customer.Fax?.toString()}
            />
          </Field>
        </Fieldset>
        <Fieldset
          className="space-y-8 flex flex-col border border-1 p-4"
          disabled
        >
          <Legend className="text-lg font-bold">Supporter/Employee Data</Legend>

          <Field key={customer.EmployeeId} className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="employeeId">
              Employee ID
            </Label>
            <Input
              className="mt-1 block w-full"
              id="employeeId"
              name="employeeId"
              defaultValue={customer.SupportRepId?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="firstName">
              First Name
            </Label>
            <Input
              className="mt-1 block w-full"
              id="firstName"
              name="firstName"
              defaultValue={customer.employees.FirstName}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="lastName">
              {employeeLabels.LastName}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="lastName"
              name="lastName"
              defaultValue={customer.employees.LastName}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="title">
              {employeeLabels.Title}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="title"
              name="title"
              defaultValue={customer.employees.Title?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="reportsTo">
              {employeeLabels.ReportsTo}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="reportsTo"
              name="reportsTo"
              defaultValue={customer.employees.ReportsTo?.toString()}
            />
          </Field>

          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="address">
              {employeeLabels.Address}
            </Label>
            <Textarea
              className="mt-1 block w-full"
              id="address"
              name="address"
              defaultValue={customer.employees.Address?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="city">
              {employeeLabels.City}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="city"
              name="city"
              defaultValue={customer.employees.City?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="country">
              {employeeLabels.Country}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="country"
              name="country"
              defaultValue={customer.employees.Country?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="postalCode">
              {employeeLabels.PostalCode}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="postalCode"
              name="postalCode"
              defaultValue={customer.employees.PostalCode?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="state">
              {employeeLabels.State}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="state"
              name="state"
              defaultValue={customer.employees.State?.toString()}
            />
          </Field>
          <Field className="flex gap-2 items-center">
            <Label className="block w-full" htmlFor="phone">
              {employeeLabels.Phone}
            </Label>
            <Input
              className="mt-1 block w-full"
              id="phone"
              name="phone"
              defaultValue={customer.employees.Phone?.toString()}
            />
          </Field>
        </Fieldset>
      </form>
    </div>
  );
}
