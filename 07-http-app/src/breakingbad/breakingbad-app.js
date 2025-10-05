/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    // xhr es viejo.
    // fetch es un método del objeto global window
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
    const data = await res.json();
    console.log(data[0]);
    return data[0];
};

// Está en mayúscula para indicar que es un componente
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authoLablel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';
    
    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLablel.innerHTML = data.author;
        
        element.replaceChildren(quoteLabel, authoLablel, nextQuoteButton);
    };

    fetchQuote()
        .then(renderQuote);
};