import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/lessonActions";

const initialState = {
  lessons: [ {
        _id: 1,
        title: "Lesson 1",
      editing: false,
    },
    {
        _id: 2,
        title: "Lesson 2",
        editing: false
    },

    {
        _id: 3,
        title: "Lesson 3",
        editing: false,
    },
      {
          _id: 4,
          title: "Lesson 4",
          editing: false
      },

      {
          _id: 5,
          title: "Lesson 5",
          editing: false
      },
]}


const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_LESSON:
        case UPDATE_LESSON:
        case CREATE_LESSON:
        default: return state

    }

}

export default lessonReducer;
