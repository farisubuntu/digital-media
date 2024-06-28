import { prisma } from "@/connect";

export async function getInvoicesTotal() {
  const res = await prisma.invoices.aggregate({
    _sum: {
      Total: true,
    },
  });

  return res._sum.Total.toFixed(2).toString();
}

export async function getInvoicesCount() {
  const res = await prisma.invoices.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all;
  console.log("count", count);

  return count;
}
