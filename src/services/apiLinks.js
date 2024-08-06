import supabase from './supabase';

export async function insertLinks({ links }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { error: deleteError } = await supabase
    .from('links')
    .delete()
    .eq('user_id', user.id);

  if (deleteError) {
    throw new Error('Links can not be saved');
  }

  const orderedLinks = links.map((link, index) => ({ ...link, order: index }));

  const { data, error } = await supabase
    .from('links')
    .insert(orderedLinks)
    .select();

  if (error) {
    throw new Error('Links can not be saved');
  }

  return data;
}

export async function getLinks(user_id) {
  const { data: links, error } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', user_id);

  if (error) {
    throw new Error(error.message);
  }

  return links;
}
