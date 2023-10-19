import supabase from './supabase';

export async function insertLinks({ data: links, user_id }) {
  const { error: deleteError } = await supabase
    .from('links')
    .delete()
    .eq('user_id', user_id);

  if (deleteError) {
    console.log(deleteError);
    throw new Error('Links can not be saved');
  }

  const { data, error } = await supabase.from('links').insert(links).select();

  if (error) {
    console.log(error);
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
    console.log(error);
    throw new Error('Links not Found');
  }

  return links;
}
