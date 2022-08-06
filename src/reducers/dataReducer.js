const initialState = { data: undefined }

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            const {data} = action
            return {...state, data}
        default:
            return state;
    }
}

export default dataReducer;