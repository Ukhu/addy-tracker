const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);

module.exports = withTM({
  reactStrictMode: true,
});
