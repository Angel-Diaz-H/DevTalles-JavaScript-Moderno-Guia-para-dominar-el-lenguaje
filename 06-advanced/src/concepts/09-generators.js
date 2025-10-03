/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next())

    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = value;
    };

    button.addEventListener('click', renderButton);

};

function* idGenerator(year){
    let currentId = 0;
    while(true){
        // Primero suma y luego se guarda.
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction(){
    // Es como un retun, se pausará al llegar a esa parte.
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'No hay valores.';
};