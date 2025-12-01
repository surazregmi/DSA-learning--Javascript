const data = [
  {
    id: 1,
    category: "Groceries",
    debit: -34.2,
    credit: 0,
    amount: 34.2,
    date: "2025-01-03",
  },
  {
    id: 2,
    category: "Salary",
    debit: 0,
    credit: 3200.0,
    amount: 3200.0,
    date: "2025-01-01",
  },
  {
    id: 3,
    category: "Groceries",
    debit: -12.9,
    credit: 0,
    amount: 12.9,
    date: "2025-01-06",
  },
  {
    id: 4,
    category: "Restaurant",
    debit: -54.1,
    credit: 0,
    amount: 54.1,
    date: "2025-01-04",
  },
  {
    id: 5,
    category: "Restaurant",
    debit: -27.4,
    credit: 0,
    amount: 27.4,
    date: "2025-01-10",
  },
  {
    id: 6,
    category: "Online Shopping",
    debit: -110.0,
    credit: 0,
    amount: 110.0,
    date: "2025-01-07",
  },
  {
    id: 7,
    category: "Online Shopping",
    debit: 0,
    credit: 45.0,
    amount: 45.0,
    date: "2025-01-12",
  },
  {
    id: 8,
    category: "ATM Withdrawal",
    debit: -300.0,
    credit: 0,
    amount: 300.0,
    date: "2025-01-09",
  },
  {
    id: 9,
    category: "Groceries",
    debit: -67.8,
    credit: 0,
    amount: 67.8,
    date: "2025-01-11",
  },
  {
    id: 10,
    category: "Subscription",
    debit: -15.99,
    credit: 0,
    amount: 15.99,
    date: "2025-01-08",
  },
  {
    id: 11,
    category: "Salary",
    debit: 0,
    credit: -100.0,
    amount: -100.0,
    date: "2025-01-15",
  },
  {
    id: 12,
    category: "Refund",
    debit: 0,
    credit: 34.2,
    amount: 34.2,
    date: "2025-01-13",
  },
  {
    id: 13,
    category: "Restaurant",
    debit: -75.5,
    credit: 0,
    amount: 75.5,
    date: "2025-01-14",
  },
  {
    id: 14,
    category: "Subscription",
    debit: -9.99,
    credit: 0,
    amount: 9.99,
    date: "2025-01-16",
  },
  {
    id: 15,
    category: "Groceries",
    debit: -22.4,
    credit: 0,
    amount: 22.4,
    date: "2025-01-17",
  },
];

const processbankData = (bankData) => {
  const grouped = bankData.reduce((acc, current) => {
    const { category, debit, credit } = current;

    if (!acc[category]) {
      acc[category] = {
        category: category,
        debit: 0,
        credit: 0,
      };
    }

    acc[category].debit += acc[category].debit;
    acc[category].credit += acc[category].credit;

    return acc;
  }, {});

  return grouped;
};

const finalResponse = Object.entries(processbankData(data)).map(
  ([category, data]) => data
);

console.log(finalResponse);
