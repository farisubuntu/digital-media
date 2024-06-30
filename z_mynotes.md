# Turso Database

> A `replica` is a copy of your database that you can use to lower the read latency of your application. Turso automatically routes your requests to the closest replica.

Read Official Docs: [https://docs.turso.tech/cli/introduction](https://docs.turso.tech/cli/introduction)

---

**Update All dates in Invoices Table:**

```ts
import { prisma } from "@/connect";

// generate random dates between start date and end date
function getRamdomDateInBetween(start: any, end: any) {
  start = Date.parse(start);
  end = Date.parse(end);

  return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}
async function updateInvoicesDates() {
  const selectedInvoices = await prisma.invoices.findMany({
    select: {
      InvoiceId: true,
      InvoiceDate: true,
    },
  });
  const startDate = new Date("2013-01-01");
  const endDate = new Date("2024-06-03");

  // console.log("Random Date: ", getRamdomDateInBetween(startDate, endDate));

  for (let i = 0; i < selectedInvoices.length; i++) {
    console.log("Random Date: ", getRamdomDateInBetween(startDate, endDate));
  }

  for (let i = 0; i < selectedInvoices.length; i++) {
    const invoiceDate = selectedInvoices[i].InvoiceDate;
    const randomDate = getRamdomDateInBetween(startDate, endDate);

    const updatedInvoice = await prisma.invoices.update({
      where: {
        InvoiceId: selectedInvoices[i].InvoiceId,
      },
      data: {
        InvoiceDate: randomDate,
      },
    });
  }
}
```

then call `updateInvoicesDates()`

```ts
await updateInvoicesDates();
```

**for example app :** [https://docs.hanko.io/tutorials/nextjs-todo](https://docs.hanko.io/tutorials/nextjs-todo)
