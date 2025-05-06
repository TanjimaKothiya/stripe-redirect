// pages/redirect.js
// import { useEffect } from "react";

// export default function RedirectPage() {
//   useEffect(() => {
//     const result = new URLSearchParams(window.location.search).get("result");
//     if (result) {
//       window.location.href = `myapp://checkout/result?status=${result}`;
//     }
//   }, []);

//   return <p>Redirecting to the app...</p>;
// }


export default function Success() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>✅ Success!</h1>
      <p>Your action was completed successfully.</p>
    </div>
  );
}
