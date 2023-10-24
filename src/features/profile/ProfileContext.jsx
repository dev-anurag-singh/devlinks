import { createContext, useContext, useReducer } from 'react';
import { useUpdateUser } from './useUpdateUser';
import { useUser } from '../auth/useUser';

const ProfileContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'profile/updateFirstName':
      return {
        ...state,
        profile: { ...state.profile, firstName: action.payload },
      };
    case 'profile/updateLastName':
      return {
        ...state,
        profile: { ...state.profile, lastName: action.payload },
      };
    case 'profile/updateEmail':
      return {
        ...state,
        profile: { ...state.profile, email: action.payload },
      };
    case 'profile/updateProfileImage':
      return {
        ...state,
        profile: {
          ...state.profile,
          image: action.payload,
          imageUrl: URL.createObjectURL(action.payload),
        },
      };
    case 'profile/setErrors':
      return { ...state, errors: action.payload };
    case 'profile/removeErrors':
      return { ...state, errors: {} };
    default:
      throw new Error('invalid action');
  }
}

function ProfileProvider({ children }) {
  const {
    user: {
      user_metadata: {
        firstName = '',
        lastName = '',
        email = '',
        avatar: imageUrl,
      },
    },
  } = useUser();

  // initial state
  const initialState = {
    profile: {
      firstName,
      lastName,
      email,
      image: '',
      imageUrl,
    },
    errors: {},
  };

  const [{ profile, errors }, dispatch] = useReducer(reducer, initialState);
  const { updateUser, isUpdating } = useUpdateUser();

  const handleFirstName = (e) => {
    dispatch({
      type: 'profile/updateFirstName',
      payload: e.target.value,
    });
  };
  const handleLastName = (e) => {
    dispatch({
      type: 'profile/updateLastName',
      payload: e.target.value,
    });
  };
  const handleEmail = (e) => {
    dispatch({
      type: 'profile/updateEmail',
      payload: e.target.value,
    });
  };

  const handleImage = (e) => {
    if (!e.target.files[0]) return;

    dispatch({
      type: 'profile/updateProfileImage',
      payload: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = {};

    if (!profile.firstName) {
      error.firstName = `can't be empty`;
    }
    if (!profile.lastName) {
      error.lastName = `can't be empty`;
    }

    if (error.firstName || error.lastName) {
      dispatch({
        type: 'profile/setErrors',
        payload: error,
      });
    }

    if (!error.firstName && !error.lastName) {
      dispatch({
        type: 'profile/removeErrors',
      });

      updateUser(profile);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        handleEmail,
        handleFirstName,
        handleLastName,
        handleSubmit,
        handleImage,
        isUpdating,
        errors,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);
  return context;
}

export { ProfileProvider, useProfile };
