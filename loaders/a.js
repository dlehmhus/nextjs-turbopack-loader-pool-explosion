// Pass-through loader. The short busy loop stands in for the work a real loader
// (Babel, a CSS-in-JS extractor) does, so Turbopack has a reason to run several
// loader invocations concurrently.
module.exports = function loader(source) {
  const end = Date.now() + 5;
  while (Date.now() < end) {}
  return source;
};
