import React, { useContext } from 'react';
import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import { FieldError } from 'react-hook-form';
import useUserSubmit from '@/hooks/useUserSubmit';
import MainDrawer from '.';
import InputArea from '../form/InputArea';
import LabelArea from '../form/LabelArea';
import SelectRole from '../form/SelectRole';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../form/Uploader';

function UserDrawer() {
  const { serviceId, isDrawerOpen, toggleDrawer } = useContext(
    SidebarContext,
  ) as SidebarContextType;

  const { onSubmit, register, handleSubmit, errors, image, changeImage } = useUserSubmit();

  

  return (
    <MainDrawer
      id={serviceId}
      title="User"
      description={`${
        serviceId ? 'Update' : 'Add'
      } your user and necessary information from here`}
      isOpen={isDrawerOpen}
      setIsOpen={toggleDrawer}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="scrollbar-hide max-h-full w-full flex-grow p-6 pb-40">
          <div className="mb-6 grid grid-cols-6 md:gap-5 lg:gap-6 xl:gap-6">
            <LabelArea label="Avater" />
            <div className="col-span-8 sm:col-span-4">
              <Uploader image={image} changeImage={changeImage} />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-6 md:gap-5 lg:gap-6 xl:gap-6">
            <LabelArea label="User Name" />
            <div className="col-span-8 sm:col-span-4">
              <InputArea
                register={register}
                label="User Name"
                name="username"
                type="text"
                labelShow={false}
                placeholder="User Name"
                error={errors.username as FieldError}
              />
            </div>
          </div>
          <div className="mb-6 grid grid-cols-6 md:gap-5 lg:gap-6 xl:gap-6">
            <LabelArea label="Email" />
            <div className="col-span-8 sm:col-span-4">
              <InputArea
                register={register}
                label="Email"
                name="email"
                type="email"
                labelShow={false}
                placeholder="Email"
                error={errors.email as FieldError}
              />
            </div>
          </div>
          {!serviceId && (
            <div className="mb-6 grid grid-cols-6 md:gap-5 lg:gap-6 xl:gap-6">
              <LabelArea label="Password" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Password"
                  name="password"
                  type="password"
                  labelShow={false}
                  placeholder="*********"
                  error={errors.password as FieldError}
                />
              </div>
            </div>
          )}
          <div className="mb-6 grid grid-cols-6 md:gap-5 lg:gap-6 xl:gap-6">
            <LabelArea label="Role" />
            <div className="col-span-8 sm:col-span-4">
              <SelectRole
                labelShow={false}
                label="Role"
                register={register}
                name="role"
              />
            </div>
          </div>
        </div>

        <DrawerButton id={serviceId} title="User" />
      </form>
    </MainDrawer>
  );
}

export default UserDrawer;
