import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import IconLink from '../../assets/icons/icon-link.svg?react';
import IconDragDrop from '../../assets/icons/icon-drag-and-drop.svg?react';
import Select from '../../ui/Select';
import { options } from '../../util/platformOptions';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { getPlaceholder, isCorrectUrl } from '../../util/urlValidator';
import Button from '../../ui/Button';
import LinksEmpty from './LinksEmpty';
import { DevTool } from '@hookform/devtools';
import { useLinkForm } from './useLinkForm';

function LinksForm() {
  const {
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
  } = useLinkForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        id="links-form"
        className="mt-10 flex flex-col gap-6  "
      >
        <Button onClick={addLink} variation="secondary">
          + Add new link
        </Button>
        <DragDropContext onDragEnd={reorderLink}>
          <Droppable droppableId="links-form-box">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                id="links-form-box"
                className="no-scrollbar flex h-[34rem] flex-col gap-6 overflow-y-scroll"
              >
                {!fields.length ? (
                  <LinksEmpty />
                ) : (
                  fields.map(({ platform, id }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex flex-col gap-3 rounded-xl bg-grey-light p-5 last:mb-10"
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
                              type="button"
                              onClick={() => {
                                removeLink(index);
                              }}
                              className="hover:text-purple"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-sm text-grey">Platform</span>
                            <Controller
                              control={control}
                              name={`links.${index}.platform`}
                              rules={{ required: 'Please select a platform' }}
                              render={({ field }) => (
                                <Select
                                  onChange={(v) => {
                                    field.onChange(v);
                                    update(index, getValues(`links.${index}`));
                                  }}
                                  defaultValue={field.value}
                                  options={options}
                                />
                              )}
                            />
                          </div>
                          <FormRow
                            label="Link"
                            icon={<IconLink />}
                            error={errors.links?.at(index)?.url?.message}
                          >
                            <Input
                              register={register(`links.${index}.url`, {
                                required: `Can't be empty`,
                                validate: (v) =>
                                  isCorrectUrl(v, platform) || 'Invalid url',
                              })}
                              id={`links.${index}.url`}
                              type="text"
                              placeholder={
                                getPlaceholder(platform) + 'username'
                              }
                            />
                          </FormRow>
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default LinksForm;
