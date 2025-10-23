import { Suspense } from "react";
import { Pricing } from "@/components/pricing";

export default function Price() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {" "}
      <Pricing />{" "}
    </Suspense>
  );
}
