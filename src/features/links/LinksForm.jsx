import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import IconLink from '../../assets/icons/icon-link.svg?react';
import IconDragDrop from '../../assets/icons/icon-drag-and-drop.svg?react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/Select';
import { options } from '../../util/platformOptions';
import Input from '../../ui/Input';
import { getPlaceholder, isCorrectUrl } from '../../util/urlValidator';
import Button from '../../ui/Button';
import LinksEmpty from './LinksEmpty';
import { useLink } from './LinksContext';
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormIcon,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useInsertLinks } from './useInsertLinks';

const formSchema = z.object({
  links: z
    .object({
      platform: z.enum(
        options.map((option) => option.value),
        {
          message: 'Invalid platform',
        },
      ),
      url: z.string({ message: "Can't be empty" }).url(),
    })
    .refine((data) => isCorrectUrl(data.url, data.platform), {
      message: `Invalid link`,
      path: ['url'],
    })
    .array(),
});

function LinksForm() {
  const { links, setLinks } = useLink();
  const { insertLinks, isCreating } = useInsertLinks();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      links: links,
    },
  });

  const { fields, append, move, remove, update } = useFieldArray({
    control: form.control,
    name: 'links',
  });

  useEffect(() => {
    setLinks(fields);
  }, [fields, setLinks]);

  const handleDrag = ({ source, destination }) => {
    if (destination) {
      move(source.index, destination.index);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(insertLinks)}>
        <div className="flex flex-col gap-6 px-6 md:px-10">
          {/* Button to add new link to fields array */}
          <Button
            onClick={() => append({ platform: 'github', url: '' })}
            variation="secondary"
          >
            + Add new link
          </Button>
          {!fields.length ? (
            <div className="md:h-[34rem]">
              <LinksEmpty />
            </div>
          ) : (
            <DragDropContext onDragEnd={handleDrag}>
              <Droppable droppableId="links-form-box">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    id="links-form-box"
                    className="custom-scrollbar h-[31rem] space-y-6 overflow-y-auto pb-6 md:h-[34rem]"
                  >
                    {fields.map((link, index) => (
                      <Draggable
                        key={link.id}
                        draggableId={link.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            key={link.id}
                            className="flex flex-col gap-3 rounded-xl bg-grey-light p-5"
                          >
                            <div className="flex justify-between">
                              <div className="flex items-center gap-1 font-bold">
                                <span
                                  {...provided.dragHandleProps}
                                  className="p-2"
                                >
                                  <IconDragDrop />
                                </span>
                                <span> Link #{index + 1}</span>
                              </div>
                              <button
                                onClick={() => remove(index)}
                                type="button"
                                className="hover:text-purple"
                              >
                                Remove
                              </button>
                            </div>
                            <FormField
                              control={form.control}
                              name={`links.${index}.platform`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Platform</FormLabel>
                                  <Select
                                    disabled={isCreating}
                                    onValueChange={(value) => {
                                      field.onChange(value);
                                      update(
                                        index,
                                        form.getValues(`links.${index}`),
                                      );
                                    }}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a Platform" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {options.map((option) => (
                                        <SelectItem
                                          key={option.value}
                                          value={option.value}
                                        >
                                          <option.icon className="group-data-[state=checked]:fill-purple" />
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`links.${index}.url`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Link</FormLabel>
                                  <FormIcon>
                                    <IconLink />
                                  </FormIcon>
                                  <FormControl>
                                    <Input
                                      disabled={isCreating}
                                      placeholder={
                                        'e.g. https://www.' +
                                        getPlaceholder(
                                          form.getValues().links[index]
                                            .platform,
                                        ) +
                                        'username'
                                      }
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
        <div className="flex flex-col border-t border-grey-border p-5 md:items-end">
          <Button disabled={isCreating || !form.formState.isDirty} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LinksForm;
