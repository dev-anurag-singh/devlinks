import supabase, { supabaseUrl } from './supabase';

export async function getProfile(id) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateProfileImage(image, userId) {
  const fileName = `avatar-${userId}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(fileName, image);

  if (storageError) throw new Error(storageError.message);

  return {
    imageUrl: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
  };
}

export async function updateProfile({
  data: { firstName, lastName, imageUrl, email },
  userId,
}) {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      firstName,
      lastName,
      imageUrl,
      email,
    })
    .eq('id', userId)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
