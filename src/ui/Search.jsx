"use client";
// Debouncing is a programming practice that limits the rate at which a function can fire. In our case, you only want to query the database when the user has stopped typing.

// How Debouncing Works:

// 1. Trigger Event: When an event that should be debounced (like a keystroke in the search box) occurs, a timer starts.
// 2. Wait: If a new event occurs before the timer expires, the timer is reset.
// 3. Execution: If the timer reaches the end of its countdown, the debounced function is executed.

// install: npm install use-debounce
// import a function called useDebounceCallback from use-debounce:
// import { useDebounceCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search() {
  // 2. Update the URL with the search params.
  const searchParams = useSearchParams();

  // ${pathname} is the current path, in your case, "/users"
  const pathname = usePathname();
  const { replace } = useRouter();

  // if you use useDebounceCallback,
  /*
    const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    // Note: This function will wrap the contents of handleSearch, and only run the code after a specific time once the user has stopped typing (300ms).
    // ....

  */
  function searchHandler(term) {
    console.log(`searching ... ${term}`);
    // 2.1  create a new URLSearchParams instance using your new searchParams variable.
    // Note: is a Web API that provides utility methods for manipulating the URL query parameters such as `?page=1&query=foo`:
    const params = new URLSearchParams(searchParams);

    // 2.2. Update the URL with the search term from the input field and delete if empty:
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // 2.3 Import useRouter and usePathname from 'next/navigation', and use the replace method from useRouter() inside handleSearch:
    replace(`${pathname}?${params.toString()}`);

    // ^ Notes:
    // As the user types into the search bar, params.toString() translates this input into a URL-friendly format.
    // replace(${pathname}?${params.toString()}) updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".
    // The URL is updated without reloading the page
  }

  // 4. Update the 'page.jsx' which will render the search results to reflect the search query.

  return (
    <>
      <div
        id="search-bar"
        className="w-120 bg-white rounded-md shadow-lg z-10 px-2 py-1"
      >
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search here"
            className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-black"
            // 1. Capture the user's input.
            onChange={(e) => {
              searchHandler(e.target.value);
            }}
            // 3. Keep the URL in sync with the input field by using `defaultValue`:
            defaultValue={searchParams.get("query")?.toString()}
          />
          <button className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
