import { Suspense } from "react";
import ClientDemo from "./ClientDemo";

export default function DemoPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {" "}
      <ClientDemo />{" "}
    </Suspense>
  );
}
