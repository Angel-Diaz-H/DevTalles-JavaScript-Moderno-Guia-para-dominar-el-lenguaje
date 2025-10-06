import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.lenght === 0) return;

    state.currentPage += 1;
    state.users = users;
};

const loadPreviousPage = async() => {
    if(state.currentPage === 1) return;
    
    const users = await loadUsersByPage(state.currentPage - 1);
    state.users = users;
    state.currentPage -= 1;
};

/**
 * 
 * @param {User} updateUser 
 */
const onUserChanged = (updateUser) => {
    let wasFound = false;

    state.users = state.users.map(user => {
        if(user.id === updateUser.id){
            wasFound = true;
            return updateUser;
        }
        return user;
    });

    if(state.users.length < 10 && !wasFound){
        state.users.push(updateUser);
    }
};

const reloadPage = async() => {
    throw new Error('Not implemented.');
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {User[]}
     */
    getCurrentPage: () => state.currentPage,
}