import React from 'react'
import { applyMiddleware } from 'redux'
import * as api from '../api'

export const askQuestion = (postData, navigate) => async (dispatch) => {
  try {
      const { data } = await api.postQuestions(postData);
      dispatch({ type: "POST_QUSETION", payload: data})
      dispatch(fetchAllQuestions());
      navigate('/')
  }
  catch(err) {
      console.log(err);
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    console.log(data);
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data});
  }
  catch(err){
    console.log(err);
  }
}
