import CustomerRow from "./CustomerRow";
import Search from "@/ui/Search";
export default async function CustomersTable() {
  const res = await fetch("http://localhost:3000/api/chinook/customers");
  const data = await res.json();
  return (
    <>
      {/* component */}
      <section className="antialiased bg-slate-700 text-blue-800  px-4">
        <div className="flex flex-col justify-center">
          {/* Table */}
          <div className="w-full  auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-center">
              <h2 className="font-semibold text-gray-800">Customers</h2>
              <div className="ml-auto">
                <Search />
              </div>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-white bg-blue-700">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Avatar</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Phone</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-200">
                    {data.map((customer) => (
                      <CustomerRow
                        key={customer.CustomerId}
                        customer={customer}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
