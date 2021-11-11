import { createSlice } from '@reduxjs/toolkit';

// SLICE
/**
 * A slice is just a part of the state. The createSlice function takes in an
 * object with the slice name, the initial state, and the reducers to create the
 * actions and action types. In other words, this is where the toolkit really
 * shines in helping reduce a lot of the boiler plate code that basic Redux requires.
 */
export const ProfileSlice = createSlice({
  name: 'profile',
  /**
   * Initial state is now put inside the createSlice object itself. With larger
   * initial states, this might be a separate object as with the basic Redux
   * example then referenced here.
   */
  initialState: {
    contactDetails: {
      phoneNumber: '(815) 812-0000',
      workNumber: '(800) 246-0000',
      street: '1000 Greenville Lane',
      apt: 'Apt A',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94100',
    },
  },
  /**
   * Reducers no longer need to return a new object as Redux Toolkit uses Immer,
   * which will detect when the state gets updated and automatically return a new
   * object to the store.
   */
  reducers: {
    updateContactDetails: (state, action) => {
      state.contactDetails[action.payload.name] = action.payload.value;
    },
  },
});

// ACTIONS
/**
 * Actions are no longer created by hand but are created by the toolkit and pulled out of the slice from the actions path.
 */
export const { updateContactDetails } = ProfileSlice.actions;

// SELECTORS
/**
 * Selectors can now be created within the slice file like with basic Redux or created in the component itself.
 */
export const selectAddress = (state) => {
  const contactDetails = state.profile.contactDetails;
  return {
    street: contactDetails.street,
    apt: contactDetails.apt,
    city: contactDetails.city,
    state: contactDetails.state,
    zipCode: contactDetails.zipCode,
  };
};

export default ProfileSlice.reducer;
