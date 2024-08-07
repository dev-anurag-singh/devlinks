import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/Form';
import Input from '../../ui/Input';
import { useProfile } from './ProfileContext';
import IconImageUpload from '../../assets/icons/icon-upload-image.svg?react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../ui/Button';
import { Label } from '../../ui/Label';
import { useUpdateAvatar } from './useUpdateAvatar';
import { useEffect } from 'react';
import { useUpdateProfile } from './useUpdateProfile';

const formSchema = z.object({
  imageUrl: z.string().optional(),
  firstName: z.string({ message: "Can't be empty" }).min(1, "Can't be empty"),
  lastName: z.string({ message: "Can't be empty" }).min(1, "Can't be empty"),
  email: z.string().email({ message: 'Invalid email' }),
});

function UpdateProfile() {
  const { updateAvatar, isUpdating: isUpdatingAvatar } = useUpdateAvatar();
  const { updateProfile, isUpdating } = useUpdateProfile();
  const { profile, setProfile } = useProfile();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: profile.firstName || '',
      lastName: profile.lastName || '',
      email: profile.email || '',
      imageUrl: profile.imageUrl || '',
    },
  });

  const handleAvatar = (e) => {
    if (!e.target.files[0]) return;
    updateAvatar(
      { avatar: e.target.files[0], userId: profile.id },
      {
        onSuccess: (data) => {
          form.setValue('imageUrl', data.imageUrl);
          setProfile((value) => ({ ...value, imageUrl: data.imageUrl }));
        },
      },
    );
  };

  const handleSubmit = (data) => {
    updateProfile({ data, userId: profile.id });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="space-y-6">
          <div className="rounded-xl bg-grey-light p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Label htmlFor="image" className="text-base text-grey">
                Profile Picture
              </Label>
              <div className="flex flex-col gap-6 md:w-[24rem] md:flex-row md:items-center">
                <div
                  style={{
                    backgroundImage: `url(${form.getValues().imageUrl})`,
                  }}
                  className="relative flex h-48 w-48 flex-col items-center justify-center  overflow-hidden rounded-xl bg-purple-light bg-cover bg-center bg-no-repeat"
                >
                  <IconImageUpload />
                  <span className="font-semibold text-purple">
                    {profile.imageUrl ? 'Change image' : '+ Upload Image'}
                  </span>
                  <Input
                    disabled={isUpdatingAvatar || isUpdating}
                    onChange={handleAvatar}
                    id="image"
                    type="file"
                    className="absolute h-full w-full cursor-pointer opacity-0"
                  />
                </div>
                <p className="text-xs md:w-32">
                  Image must be below 1024x1024px. Use PNG or JPG format.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl bg-grey-light p-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="md:flex-row md:items-center md:justify-between">
                  <FormLabel className="md:text-base md:text-grey">
                    First Name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isUpdating}
                      className="pl-4 md:w-[24rem]"
                      placeholder="e.g. Alex"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setProfile((v) => ({
                          ...v,
                          firstName: value.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormMessage className="md:right-3 md:top-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="md:flex-row md:items-center md:justify-between">
                  <FormLabel className="md:text-base md:text-grey">
                    Last Name*
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isUpdating}
                      className="pl-4 md:w-[24rem]"
                      placeholder="e.g. Wright"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setProfile((v) => ({
                          ...v,
                          lastName: value.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormMessage className="md:right-3 md:top-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:flex-row md:items-center md:justify-between">
                  <FormLabel className="md:text-base md:text-grey">
                    Email*
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isUpdating}
                      className="pl-4 md:w-[24rem]"
                      placeholder="e.g. alex@example.com"
                      {...field}
                      onChange={(value) => {
                        field.onChange(value);
                        setProfile((v) => ({
                          ...v,
                          email: value.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormMessage className="md:right-3 md:top-3" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="-mx-6 flex flex-col border-t border-grey-border p-5 md:-mx-10 md:items-end">
          <Button disabled={isUpdatingAvatar || isUpdating} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateProfile;
