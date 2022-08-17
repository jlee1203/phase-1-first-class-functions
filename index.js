function standardFunction(){
    console.log("I'm a standard function!");
}

function receivesAFunction(callbackFunction){
    standardFunction();
    callbackFunction();
}

function randomFunction(){
    const randomVariable = "I am James."
    return randomVariable
}

function returnsANamedFunction(){
    return randomFunction;
}

function returnsAnAnonymousFunction(){
    return function() {}
}

