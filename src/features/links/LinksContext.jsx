import { createContext, useContext, useEffect } from 'react';
import { useGetLinks } from './useGetLinks';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useInsertLinks } from './useInsertLinks';
import { useUser } from '../auth/useUser';

const LinksContext = createContext();

function LinksProvider({ children }) {
  const { user } = useUser();
  const { insertLinks } = useInsertLinks();
  const { links, isCreating } = useGetLinks();

  const {
    control,
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      links: [],
    },
  });

  const { fields, append, move, remove, update } = useFieldArray({
    control,
    name: 'links',
  });

  useEffect(() => {
    if (!links) return;
    reset({ links });
  }, [reset, links]);

  const addLink = () => {
    append({
      platform: 'github',
      url: '',
    });
  };
  const reorderLink = ({ source, destination }) => {
    if (destination) {
      move(source.index, destination.index);
    }
  };
  const removeLink = (index) => {
    remove(index);
  };

  const handleFormSubmit = ({ links }) => {
    const data = links.map(({ platform, url }) => ({
      platform,
      url,
    }));
    insertLinks({ data, user_id: user.id });
  };

  return (
    <LinksContext.Provider
      value={{
        fields,
        register,
        getValues,
        handleSubmit,
        update,
        addLink,
        removeLink,
        reorderLink,
        handleFormSubmit,
        control,
        Controller,
        errors,
        disabled: !fields.length,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

function useLink() {
  const context = useContext(LinksContext);
  return context;
}

export { LinksProvider, useLink };
