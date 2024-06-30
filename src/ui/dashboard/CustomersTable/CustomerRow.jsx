import { getCountryFlagByName } from "@/lib/countries-flags";
import DeleteButton from "@/ui/dashboard/Buttons/DeleteButton";
import EditButton from "@/ui/dashboard/Buttons/EditButton";
import ViewButton from "@/ui/dashboard/Buttons/ViewButton";
import Image from "next/image";
import Link from "next/link";

export default async function CustomerRow({ customer }) {
  const countryFlag = getCountryFlagByName(customer.Country);

  // https://avatar.iran.liara.run/public?usearname=[value]
  const randomImage = `https://avatar.iran.liara.run/public?usearname=${customer.FirstName}`;
  return (
    <tr>
      <td className="p-2 whitespace-nowrap border-l-2">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <Image
              className="rounded-full"
              src={
                randomImage ? randomImage : "https://via.placeholder.com/150"
              }
              width={40}
              height={40}
              alt={customer.country}
            />
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap border-l-2">
        <div className="font-medium">
          {customer.FirstName + " " + customer.LastName}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap border-l-2">
        <div className="text-left">{customer.Email}</div>
      </td>
      <td className="p-2 whitespace-nowrap border-l-2">
        <div className="text-left font-medium">{customer.Phone}</div>
      </td>
      <td className="p-2 whitespace-nowrap border-l-2 h-4 w-4">
        <div className="text-2xl text-center w-full">
          {countryFlag || "N/A"}
        </div>
      </td>
      <td className="whitespace-nowrap text-white bg-red-700 ml-1 text-center">
        <DeleteButton action={""} />
      </td>
      <td className="whitespace-nowrap text-white bg-green-700 ml-1 text-center">
        <EditButton action={""} />
      </td>
      <td className="whitespace-nowrap text-white bg-slate-700 ml-1 text-center">
        <ViewButton action={""} />
      </td>
    </tr>
  );
}
