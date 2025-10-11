import { createSlice, configureStore } from "@reduxjs/toolkit";

import JOBLIST from "../data/jobs";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: JOBLIST,
  },
  reducers: {
    filter(state, action) {
      if (action.payload.city === "") {
        state.jobs = JOBLIST;
        return;
      }
      console.log("action payload", action.payload);
      state.jobs = JOBLIST.filter(job => job.city === action.payload.city);
    },
  },
});

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
});

export const jobsActions = jobsSlice.actions;

export default store;
