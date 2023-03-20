const msg = function (){
    console.log("Welcome to JS");

};
function print(a){
    a();
}
print(msg);


setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);


(function (){
    console.log("hello");

})();


