import Image from "next/image";
import SubmitButton from "@/ui/dashboard/Buttons/Submit-Button";

export default function CustomerDetails({ customer }) {
  const randomImage = `https://picsum.photos/id/${customer.CustomerId}/200/300`;
  console.log("randomImage", randomImage);
  return (
    <>
      <div className="h-screen w-full text-blue my-2 mx-2">
        <div className="grid grid-cols-4">
          {/* user main info */}
          <div className="col-span-3 flex flex-col">
            <div className="w-full border border-white px-1 py-1 my-2 rounded-lg">
              <div className="ml-2 text-lg">Basic User Information</div>
              <form action="">
                <div className="flex flex-col">
                  <div className="grid grid-cols-2">
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="firstName" className="w-1/2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.FirstName}
                      />
                    </div>
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="lastName" className="w-1/2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.LastName}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="email" className="w-1/2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.Email}
                      />
                    </div>
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="phone" className="w-1/2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.Phone}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="city" className="w-1/2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.City}
                      />
                    </div>
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="state" className="w-1/2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.State || "n/a"}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="country" className="w-1/2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.Country}
                      />
                    </div>
                    <div className="flex mx-3 gap-3 my-2 items-center">
                      <label htmlFor="postalCode" className="w-1/2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        className="border border-white rounded-lg w-full"
                        defaultValue={customer.PostalCode}
                      />
                    </div>
                  </div>
                  <div className="flex mx-3 gap-3 my-2 items-center">
                    <label htmlFor="address" className="w-1/2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="border border-white rounded-lg w-full"
                      defaultValue={customer.Address}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full border border-white px-1 py-1 my-2 rounded-lg">
              <div className="text-lg">User Employees</div>
            </div>
            <div className="w-full border border-white px-1 py-1 my-2 rounded-lg">
              <div className="text-lg">User Invoices</div>
            </div>
          </div>
          <div className="mx-auto">
            <Image
              src={randomImage}
              alt="random image"
              width={200}
              height={200}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
