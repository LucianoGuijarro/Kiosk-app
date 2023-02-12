import { CATEGORIES } from '../../constant/index';

const initialState = {
    categories: CATEGORIES,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    return state
}

export default categoryReducer;