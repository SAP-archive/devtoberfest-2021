// INITIAL STATE
/**
 * The initial state is the data loaded into your application on start, before
 * any code has been run. If the state needs to be updated from API calls, this
 * will happen after the state has been initialized.
 *
 * This is frequently in a separate file to accommodate large initial states.
 * Other times it can be a file structure the team maintaining the code decided on.
 */
const initialState = {
  contactDetails: {
    phoneNumber: '(815) 812-1000',
    workNumber: '(800) 246-0000',
    street: '1000 Greenville Lane',
    apt: 'Apt A',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94100',
  },
};

// SELECTORS
/**
 * A selector grabs data from your state and provides it to your components wherever
 * the functions are called. They work from the global state, rather than small part
 * of the state from the reducer file they are in. This is important to note when there
 * is more than one reducer in a project as it can change the data access path from
 * the state.
 *
 * Sometimes selectors and actions could be exported from an actions.js file so all
 * actions from multiple reducers in a feature can come from the same file.
*/
export const getContactDetails = (state) => state.contactDetails;
export const getPhoneNumber = (state) => state.contactDetails.phoneNumber;
export const getWorkNumber = (state) => state.contactDetails.workNumber;
export const getAddress = (state) => {
  // grab only the values we want
  return {
    street: state.contactDetails.street,
    apt: state.contactDetails.apt,
    city: state.contactDetails.city,
    state: state.contactDetails.state,
    zipCode: state.contactDetails.zipCode,
  };
};

// ACTIONS
/**
 * Actions carry payloads (data) from your code into the state, which is then sent to
 * the reducer via the dispatcher. The action types are how the reducer knows which
 * part of the state to update.
 *
 * Often times, action types are put in a separate file, commonly names actionTypes.js
 * as enums to allow for easier updating if the string changes.
 */
export const updateContactDetails = (payload) => {
  return {
    type: 'UPDATE_CONTACT_DETAILS',
    payload: {
      name: payload.name,
      value: payload.value,
    },
  };
};

// REDUCER
/**
 * Reducers are functions that are called by the dispatcher and sent in the
 * current state and the action that was provided. This is how the state gets
 * updated and once updated, is returned to the store to be used where needed.
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CONTACT_DETAILS':
      return {
        ...state, // always make sure to return a new object by using techniques such as spread operator, instead of mutating the state objects directly
        contactDetails: {
          ...state.contactDetails, // once again make sure to return a new object, rather than updating the old one
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
}
