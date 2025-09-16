import { useRouter } from "next/router";
import { useEffect } from "react";
import PropertyDetails from "./property-details";

const PropertyPage = () => {
  const router = useRouter();

  useEffect(() => {
    // If no property ID, redirect to properties page
    if (!router.query.id) {
      router.push("/properties");
    }
  }, [router]);

  return <PropertyDetails />;
};

export default PropertyPage;
