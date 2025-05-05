// pages/redirect.js
import { useEffect } from "react";

export default function RedirectPage() {
  useEffect(() => {
    const result = new URLSearchParams(window.location.search).get("result");
    if (result) {
      window.location.href = `myapp://checkout/result?status=${result}`;
    }
  }, []);

  return <p>Redirecting to the app...</p>;
}
