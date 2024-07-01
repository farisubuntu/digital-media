import CutstomerDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";
import { getCustomerDetails } from "@/lib/utils";

export default async function CustomerDetailPage({ params }) {
  const customer = await getCustomerDetails(params.customerId);
  console.log("customer", customer);
  return (
    <>
      {customer ? (
        <CutstomerDetails customer={customer} />
      ) : (
        <div>Error Cusomer Not Found</div>
      )}
    </>
  );
}
