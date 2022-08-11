import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const createNewQuiz = payload => {
    const { topicId, id } = payload;
    return dispatch => {
        dispatch(quizzesSlice.actions.addQuiz(payload));          
        dispatch(addQuizId({ quizId: id, topicId: topicId }));
    }
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
