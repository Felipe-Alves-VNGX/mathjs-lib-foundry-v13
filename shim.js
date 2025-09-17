/* Exposição defensiva da global window.math */
(() => {
  if (typeof window !== "undefined") {
    if (typeof window.math === "undefined" && typeof globalThis !== "undefined" && typeof globalThis.math !== "undefined") {
      window.math = globalThis.math;
    } else if (typeof window.math === "undefined" && typeof math !== "undefined") {
      window.math = math;
    }
  }
})();
