import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id = '5d86371f25a058e5b1c8a65e';
    findHero(id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No hay héroe';

        if(error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero?.name;
    });
};

/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(heroe => heroe.id === id);

    if(!hero) {
        callback(`Hero with id ${id} not found`);
        return; // undefined;
    }

    callback(null, hero);
};