import CustomerCard from "@/ui/dashboard/Cards/CustomerCard";
import EmployeeCard from "@/ui/dashboard/Cards/EmployeeCard";
import InvoiceCard from "@/ui/dashboard/Cards/InvoiceCard/InvoiceCard";
import type { Employee, Invoice, Customer } from "@prisma/client";
import { getCustomerInvoices, getEmployeeDetails } from "@/lib/utils";
import Image from "next/image";

function NoSuppporter() {
  return (
    <>
      <div className="text-white bg-red-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
        No SuppoerterRepId Found or NULL
      </div>
    </>
  );
}

export default async function CustomerDetails({
  customer,
}: {
  customer: Customer | any;
}) {
  const customerInfo: Customer = customer;


const employeeInfo = await getEmployeeDetails(customerInfo.SupportRepId);

  const invoices: Invoice[] = await getCustomerInvoices(
    customerInfo.CustomerId
  );

  return (
    <div className="w-full flex flex-col">
      <div className="md:flex md:h-full my-2 p-2">
        <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-inherit">
          <h1 className="p-2 w-full text-4xl text-center">
            Personal Information
          </h1>
        </div>
        <div className="p-1 md:w-4/12 mx-3">
          <Image
            src={
              customerInfo?.ImageURL ||
              "https://xsgames.co/randomusers/avatar.php?g=male"
            }
            width={300}
            alt="Movie Poster"
            height={150}
            className="w-full object-cover"
          />
        </div>
        <div className="md:w-full text-xl">
          <CustomerCard customer={customerInfo} />
        </div>
      </div>
      <div className="md:flex md:h-full my-2 p-2">
        <div className="text-white bg-blue-500 md:w-1/12 ml-2 md:[writing-mode:vertical-lr] text-2xl h-inherit">
          <h1 className="p-2 w-full text-4xl text-center">Suupporter</h1>
        </div>
        <div className="p-1 md:w-4/12 mx-3">
          <Image
            src={
              employeeInfo?.ImageURL ||
              "https://xsgames.co/randomusers/avatar.php?g=female"
            } 
            width={300}
            height={150}
            alt="Movie Poster"
            className="md:w-full object-cover md:h-full"
          />
        </div>
        <div className="md:w-full text-xl">
          {employeeInfo !== null ? (
            <EmployeeCard employee={employeeInfo} />
          ) : (
            <NoSuppporter />
          )}
        </div>
      </div>
      <h1 className="text-white text-4xl my-5 p-4 mx-3 bg-blue-500 w-1/4 border rounded-xl">
        Invoices -{" "}
        <span className="text-md italic">
          TODO: Total Customer Invoices here
        </span>
      </h1>
      <div className="flex flex-col text-white bg-bule-900">
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.InvoiceId} Invoice={invoice} />
        ))}
      </div>
    </div>
  );
}
