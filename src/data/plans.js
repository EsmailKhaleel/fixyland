const plansMonthly = [
  {
    name: "Starter Plan",
    type: "monthly",
    price: 80.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: false },
      { name: "Fibre Internet", available: false },
      { name: "Wall Cleaning", available: false },
      { name: "Clean Installation", available: false }
    ],
    hasDiscount: false,
    discount: 0
  },
  {
    name: "Premium Plan",
    type: "monthly",
    price: 200.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: true },
      { name: "Fibre Internet", available: true },
      { name: "Wall Cleaning", available: false },
      { name: "Clean Installation", available: false }
    ],
    hasDiscount: true,
    discount: 40
  },
  {
    name: "Gold Plan",
    type: "monthly",
    price: 350.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: true },
      { name: "Fibre Internet", available: true },
      { name: "Wall Cleaning", available: true },
      { name: "Clean Installation", available: true }
    ],
    hasDiscount: false,
    discount: 0
  }
];

const plansYearly = [
  {
    name: "Starter Plan",
    type: "yearly",
    price: 80.0 * 12 * 0.9, // 10% discount
    priceMonthlyEquivalent: 80.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: false },
      { name: "Fibre Internet", available: false },
      { name: "Wall Cleaning", available: false },
      { name: "Clean Installation", available: false }
    ],
    hasDiscount: false,
    discount: 0
  },
  {
    name: "Premium Plan",
    type: "yearly",
    price: 200.0 * 12 * 0.9,
    priceMonthlyEquivalent: 200.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: true },
      { name: "Fibre Internet", available: true },
      { name: "Wall Cleaning", available: false },
      { name: "Clean Installation", available: false }
    ],
    hasDiscount: true,
    discount: 40
  },
  {
    name: "Gold Plan",
    type: "yearly",
    price: 350.0 * 12 * 0.9,
    priceMonthlyEquivalent: 350.0,
    features: [
      { name: "Pick & Drop Service", available: true },
      { name: "Swimming Pool", available: true },
      { name: "City Tour Guide", available: true },
      { name: "Fibre Internet", available: true },
      { name: "Wall Cleaning", available: true },
      { name: "Clean Installation", available: true }
    ],
    hasDiscount: false,
    discount: 0
  }
];

export { plansMonthly, plansYearly };
