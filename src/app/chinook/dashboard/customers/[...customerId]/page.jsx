import CutstomerDetails from "@/ui/dashboard/CustomerDetails/CustomerDetails";

async function getCustomerDetails(id) {
  const customerDetails = await fetch(
    `http://localhost:3000/api/chinook/customers/${id}`
  );

  console.log("customerDetails", customerDetails);
  return await customerDetails.json();
}
export default async function CustomerDetailPage({ params }) {
  const customer = await getCustomerDetails(params.customerId);

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
