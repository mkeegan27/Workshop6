// In './test_default_module.js':
function Bar() {
console.log("I'm Bar!");
}
// A CommonJS "default" export merely overwrites the entire
// module.exports object.
//
// Unlike ECMAScript 6 modules, you cannot have default and
// non-default exports in the same module. `module.exports`
// is simply a JavaScrip
module.exports = Bar;
