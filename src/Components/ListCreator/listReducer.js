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
        case 'CHANGE_COUSINE':
            return {
                ...state,
                cousine: action.value,
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
