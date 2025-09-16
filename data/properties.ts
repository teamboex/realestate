export interface Property {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  address: string;
  type: "apartment" | "villa" | "house" | "plot" | "commercial";
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: "sqft" | "sqm" | "acres";
  images: string[];
  features: string[];
  description: string;
  amenities: string[];
  nearbyFacilities: string[];
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  status: "available" | "sold" | "rented";
  listedDate: string;
  propertyId: string;
  reraId?: string;
  floor?: number;
  totalFloors?: number;
  parking?: number;
  furnishing?: "furnished" | "semi-furnished" | "unfurnished";
  age?: string;
  facing?:
    | "north"
    | "south"
    | "east"
    | "west"
    | "north-east"
    | "north-west"
    | "south-east"
    | "south-west";
  balcony?: number;
  security?: boolean;
  lift?: boolean;
  powerBackup?: boolean;
  waterSupply?: string;
  maintenance?: number;
}

export const properties: Property[] = [
  {
    id: "2bhk-apartment-kochi-maradu",
    title: "2BHK Apartment, Kochi",
    price: 4500000,
    priceFormatted: "₹45 Lakhs",
    location: "Maradu, Kochi",
    address: "Maradu, Kochi, Kerala 682304",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: "sqft",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    features: ["2 Bedrooms", "2 Bathrooms", "Balcony", "Parking"],
    description:
      "Beautiful 2BHK apartment in the heart of Maradu with modern amenities and excellent connectivity. Perfect for families looking for a comfortable living space in Kochi.",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Parking",
      "Security",
      "Lift",
      "Power Backup",
      "Water Supply",
    ],
    nearbyFacilities: [
      "Maradu Metro Station (500m)",
      "Lulu Mall (2km)",
      "Fortis Hospital (1km)",
      "Kochi International Airport (15km)",
    ],
    contact: {
      phone: "6282106265",
      email: "krishnasanjay68@gmail.com",
      whatsapp: "916282106265",
    },
    status: "available",
    listedDate: "2024-01-15",
    propertyId: "PROP001",
    reraId: "K-RERA/AG/0138/2025",
    floor: 3,
    totalFloors: 8,
    parking: 1,
    furnishing: "semi-furnished",
    age: "2 years",
    facing: "south",
    balcony: 1,
    security: true,
    lift: true,
    powerBackup: true,
    waterSupply: "24/7",
    maintenance: 2000,
  },
  {
    id: "3bhk-villa-ernakulam-kakkanad",
    title: "3BHK Villa, Ernakulam",
    price: 8500000,
    priceFormatted: "₹85 Lakhs",
    location: "Kakkanad, Ernakulam",
    address: "Kakkanad, Ernakulam, Kerala 682030",
    type: "villa",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    areaUnit: "sqft",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687940-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687941-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    features: ["3 Bedrooms", "3 Bathrooms", "Garden", "2 Car Parking"],
    description:
      "Spacious 3BHK independent villa with beautiful garden and modern amenities. Located in the IT hub of Ernakulam with excellent connectivity.",
    amenities: [
      "Garden",
      "Parking",
      "Security",
      "Power Backup",
      "Water Supply",
      "Gym",
      "Swimming Pool",
    ],
    nearbyFacilities: [
      "Infopark (1km)",
      "Lulu Mall (3km)",
      "Amrita Hospital (2km)",
      "Cochin University (5km)",
    ],
    contact: {
      phone: "6282106265",
      email: "krishnasanjay68@gmail.com",
      whatsapp: "916282106265",
    },
    status: "available",
    listedDate: "2024-01-10",
    propertyId: "PROP002",
    reraId: "K-RERA/AG/0138/2025",
    floor: 1,
    totalFloors: 2,
    parking: 2,
    furnishing: "furnished",
    age: "1 year",
    facing: "east",
    balcony: 2,
    security: true,
    lift: false,
    powerBackup: true,
    waterSupply: "24/7",
    maintenance: 5000,
  },
  {
    id: "1bhk-apartment-fort-kochi",
    title: "1BHK Apartment, Fort Kochi",
    price: 2800000,
    priceFormatted: "₹28 Lakhs",
    location: "Fort Kochi, Kochi",
    address: "Fort Kochi, Kochi, Kerala 682001",
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    areaUnit: "sqft",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323591-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522708323592-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    features: ["1 Bedroom", "1 Bathroom", "Sea View", "Parking"],
    description:
      "Cozy 1BHK apartment with stunning sea view in the historic Fort Kochi area. Perfect for young professionals or couples.",
    amenities: ["Sea View", "Parking", "Security", "Lift", "Power Backup"],
    nearbyFacilities: [
      "Fort Kochi Beach (200m)",
      "Chinese Fishing Nets (300m)",
      "St. Francis Church (500m)",
      "Kochi Metro (1km)",
    ],
    contact: {
      phone: "6282106265",
      email: "krishnasanjay68@gmail.com",
      whatsapp: "916282106265",
    },
    status: "available",
    listedDate: "2024-01-20",
    propertyId: "PROP003",
    reraId: "K-RERA/AG/0138/2025",
    floor: 5,
    totalFloors: 6,
    parking: 1,
    furnishing: "unfurnished",
    age: "5 years",
    facing: "west",
    balcony: 1,
    security: true,
    lift: true,
    powerBackup: true,
    waterSupply: "24/7",
    maintenance: 1500,
  },
  {
    id: "4bhk-independent-house-thripunithura",
    title: "4BHK Independent House",
    price: 12000000,
    priceFormatted: "₹1.2 Crores",
    location: "Thripunithura, Ernakulam",
    address: "Thripunithura, Ernakulam, Kerala 682301",
    type: "house",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    areaUnit: "sqft",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687940-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687941-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687942-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    features: ["4 Bedrooms", "4 Bathrooms", "Garden", "3 Car Parking"],
    description:
      "Luxurious 4BHK independent house with spacious rooms, modern amenities, and beautiful garden. Perfect for large families.",
    amenities: [
      "Garden",
      "Parking",
      "Security",
      "Power Backup",
      "Water Supply",
      "Gym",
      "Swimming Pool",
      "Club House",
    ],
    nearbyFacilities: [
      "Thripunithura Railway Station (1km)",
      "Rajagiri Hospital (2km)",
      "Cochin University (3km)",
      "Lulu Mall (4km)",
    ],
    contact: {
      phone: "6282106265",
      email: "krishnasanjay68@gmail.com",
      whatsapp: "916282106265",
    },
    status: "available",
    listedDate: "2024-01-05",
    propertyId: "PROP004",
    reraId: "K-RERA/AG/0138/2025",
    floor: 1,
    totalFloors: 2,
    parking: 3,
    furnishing: "furnished",
    age: "3 years",
    facing: "north",
    balcony: 3,
    security: true,
    lift: false,
    powerBackup: true,
    waterSupply: "24/7",
    maintenance: 8000,
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((property) => property.id === id);
};

export const getPropertiesByType = (type: string): Property[] => {
  return properties.filter((property) => property.type === type);
};

export const getPropertiesByLocation = (location: string): Property[] => {
  return properties.filter(
    (property) =>
      property.location.toLowerCase().includes(location.toLowerCase()) ||
      property.address.toLowerCase().includes(location.toLowerCase())
  );
};

export const getPropertiesByPriceRange = (
  minPrice: number,
  maxPrice: number
): Property[] => {
  return properties.filter(
    (property) => property.price >= minPrice && property.price <= maxPrice
  );
};
