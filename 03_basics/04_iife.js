// Immediately Invoked Function Expressions (IIFE)

(function check() {
    // named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected two, ${name}`);
})("sandip")