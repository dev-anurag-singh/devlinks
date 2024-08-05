import { createContext, useContext, useEffect, useState } from 'react';
import { useGetLinks } from './useGetLinks';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useUser } from '../auth/useUser';

const LinksContext = createContext();

function LinksProvider({ children }) {
  const [links, setLinks] = useState([]);

  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
}

function useLink() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error('useLink should be used within <LinksProvider>');
  }
  return context;
}

export { LinksProvider, useLink };

// function LinksProvider({ children }) {
//   const { user } = useUser();
//   const { links, isLoading, error } = useGetLinks();

//   const {
//     control,
//     register,
//     getValues,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       links: [],
//     },
//   });

//   const { fields, append, move, remove, update } = useFieldArray({
//     control,
//     name: 'links',
//   });

//   useEffect(() => {
//     if (!links) return;
//     reset({ links });
//   }, [reset, links]);

//   const addLink = () => {
//     append({
//       platform: 'github',
//       url: '',
//     });
//   };
//   const reorderLink = ({ source, destination }) => {
//     if (destination) {
//       move(source.index, destination.index);
//     }
//   };
//   const removeLink = (index) => {
//     remove(index);
//   };

//   const handleFormSubmit = ({ links }) => {
//     const data = links.map(({ platform, url }) => ({
//       platform,
//       url,
//     }));
//     // insertLinks({ data, user_id: user.id });
//   };

//   return (
//     <LinksContext.Provider
//       value={{
//         fields,
//         register,
//         getValues,
//         handleSubmit,
//         update,
//         addLink,
//         removeLink,
//         reorderLink,
//         handleFormSubmit,
//         control,
//         Controller,
//         errors,
//         disabled: !fields.length,
//       }}
//     >
//       {children}
//     </LinksContext.Provider>
//   );
// }
