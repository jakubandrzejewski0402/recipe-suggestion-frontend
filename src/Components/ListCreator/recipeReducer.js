export const manageList = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COURSE':
            return {
                ...state,
                course: action.value,
            };
        case 'CHANGE_DIET_TYPE':
            return {
                ...state,
                dietType: action.value,
            };
        case 'CHANGE_CUISINE':
            return {
                ...state,
                cuisine: action.value,
            };
        case 'CHANGE_MAX_READY_TIME':
            return {
                ...state,
                maxReadyTime: action.value,
            };
        case 'CHANGE_DESCRIPTION':
            return {
                ...state,
                description: action.value,
            };
        default:
            return state;
    }
};
