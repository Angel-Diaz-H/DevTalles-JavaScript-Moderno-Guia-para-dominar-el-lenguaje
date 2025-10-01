import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `;
    };

    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    // Mandar las promesas como listas de manera simultanea.
    // Con que una promesa da error, pasa por el catch y no se ejecuta ninguna promesa.
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
    .catch(renderError);

    //! Forma 2.
    // let hero1, hero2;
    // findHero(id1)
    //     .then(hero =>{
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero => {
    //         hero2 = hero;
    //         renderTwoHero(hero1, hero2);
    //     })

    //! Forma 1.
    // findHero(id1)
    //     .then((hero1) =>{
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHero(hero1, hero2);
    //             });
    //     })
    //     .catch(renderError);
};

/**
 * 
 * @param {String} id 
 * @returns {promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if(hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);
    });
};