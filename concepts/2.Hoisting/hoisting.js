console.log('Hoisting in js')

// logging
console.log(`---- logging ----`);
console.log('fnWithKeyword -->', fnWithKeyword);     
console.log(`a --> ${a}`)                  
console.log('arrowFnWithKeyword -->', arrowFnWithKeyword); 
console.log('arrowFnWithoutKeyword -->', arrowFnWithoutKeyword); 

// fn Invokation
console.log(`---- fn Invokation ----`);
fnWithKeyword()  
arrowFnWithKeyword()
arrowFnWithoutKeyword()

const a;

function fnWithKeyword(){
    console.log(`Inside fnWithKeyword`);
}

const arrowFnWithKeyword = () => {
    console.log(`Inside arrowFnWithKeyword `);
}

const arrowFnWithoutKeyword = () => {
    console.log(`Inside arrowFnWithoutKeyword `);
}