import { useState, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { properties, Property } from "../../data/properties";

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000000 });
  const [bedrooms, setBedrooms] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");

  const filteredProperties = useMemo(() => {
    let filtered = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = !selectedType || property.type === selectedType;

      const matchesPrice =
        property.price >= priceRange.min && property.price <= priceRange.max;

      const matchesBedrooms =
        !bedrooms || property.bedrooms === parseInt(bedrooms);

      return matchesSearch && matchesType && matchesPrice && matchesBedrooms;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "area-asc":
          return a.area - b.area;
        case "area-desc":
          return b.area - a.area;
        case "newest":
          return (
            new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedType, priceRange, bedrooms, sortBy]);

  const propertyTypes = ["apartment", "villa", "house", "plot", "commercial"];
  const bedroomOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <Head>
        <title>Properties | Krishna Sanjay Real Estate</title>
        <meta
          name="description"
          content="Browse our extensive collection of properties in Ernakulam and surrounding areas. Find your dream home with our RERA-registered real estate services."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container-max">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                Krishna Sanjay
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-secondary-700 hover:text-primary-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className="text-primary-600 font-medium"
                >
                  Properties
                </Link>
                <Link
                  href="/#about"
                  className="text-secondary-700 hover:text-primary-600 font-medium"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-secondary-700 hover:text-primary-600 font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container-max py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-primary-600 hover:text-primary-700"
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Properties</span>
            </nav>
          </div>
        </div>

        <div className="container-max py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-secondary-800 mb-6">
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type} className="capitalize">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Any</option>
                    {bedroomOptions.map((num) => (
                      <option key={num} value={num}>
                        {num} Bedroom{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={priceRange.min || ""}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={priceRange.max || ""}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value) || 20000000,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="area-asc">Area: Small to Large</option>
                    <option value="area-desc">Area: Large to Small</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedType("");
                    setPriceRange({ min: 0, max: 20000000 });
                    setBedrooms("");
                    setSortBy("price-asc");
                  }}
                  className="w-full btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-secondary-800">
                  Properties ({filteredProperties.length})
                </h1>
              </div>

              {filteredProperties.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No properties found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.priceFormatted}
        </div>
        <div className="absolute top-4 left-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              property.status === "available"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {property.status === "available" ? "Available" : "Sold"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-800 mb-2">
          {property.title}
        </h3>
        <p className="text-secondary-600 mb-4 flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-primary-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {property.location}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-secondary-600">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {property.area} {property.areaUnit}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/property?id=${property.id}`}
            className="flex-1 btn-primary text-center"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/${property.contact.whatsapp}?text=Hi, I'm interested in ${property.title} - ${property.priceFormatted}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
