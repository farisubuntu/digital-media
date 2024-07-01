import Image from "next/image";

export default function CustomerDetails({ customer }) {
  const randomImage = `https://picsum.photos/id/${customer.CustomerId}/200/300`;
  console.log("randomImage", randomImage);
  return (
    <>
      <div className="h-screen w-full text-blue my-2 mx-2">
        <div className="grid grid-cols-4">
          {/* user main info */}
          <div className="col-span-3 flex flex-col">
            <div className="w-full text-lg border border-white px-1 py-1 my-2 rounded-lg">Basic User Information</div>
            <div className="w-full text-lg border border-white px-1 py-1 my-2 rounded-lg">User Employees</div>
            <div className="w-full text-lg border border-white px-1 py-1 my-2 rounded-lg">User Invoices</div>
          </div>
          <div className="col-span-1 ml-auto mr-2">
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
