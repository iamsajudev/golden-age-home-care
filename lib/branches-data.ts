// lib/branches-data.ts
export type Branch = {
  code: string;
  name: string;
  region: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  hours: string;
  mapsUrl: string;
};

export const branches: Branch[] = [
  {
    code: "01",
    name: "Queens",
    region: "Queens County",
    address: {
      street: "71-24 39th Ave",
      city: "Jackson Heights",
      state: "NY",
      zip: "11372",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=71-24+39th+Ave+Jackson+Heights+NY+11372",
  },
  {
    code: "02",
    name: "Brooklyn",
    region: "Kings County",
    address: {
      street: "xxx Main St",
      city: "Brooklyn",
      state: "NY",
      zip: "11201",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Brooklyn+NY",
  },
  {
    code: "03",
    name: "The Bronx",
    region: "Bronx County",
    address: {
      street: "xxx Grand Concourse",
      city: "Bronx",
      state: "NY",
      zip: "10451",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Bronx+NY",
  },
  {
    code: "04",
    name: "Staten Island",
    region: "Richmond County",
    address: {
      street: "xxx Bay St",
      city: "Staten Island",
      state: "NY",
      zip: "10301",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Staten+Island+NY",
  },
  {
    code: "05",
    name: "Manhattan",
    region: "New York County",
    address: {
      street: "xxx Broadway",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Manhattan+NY",
  },
  {
    code: "06",
    name: "Westchester",
    region: "Westchester County",
    address: {
      street: "xxx Main St",
      city: "White Plains",
      state: "NY",
      zip: "10601",
    },
    phone: "(718) 775-7852",
    hours: "Mon–Fri · 9:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=White+Plains+NY",
  },
];