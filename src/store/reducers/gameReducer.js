const initState = {
    games: [],
    result: ""
}

const gameReducer = ( state = initState, action ) => {
    switch (action.type) {
        case 'CREATE_GAME':
            console.log("Joc adaugat", action.game);
            return {
                ...state, 
                result: "Joc adaugat"
            }

        case 'CREATE_GAME_ERROR':
            console.log("Game adding failed.", action.error);
            return {
                ...state, 
                result: action.error.message
            }
        default:
            return state;
    }
}

export default gameReducer;