import React from "react";
import IconSvg from "@/app/components/IconSvg";
import Modal from "@/app/components/Modal";
import SaveButton from "@/components/SaveButton";
import CancelButton from "@/app/components/CancelButton";

interface SidebarModalProps {
  isOpen: boolean;
  closeOpen: () => void;
}
const COUNT_ICONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13];

function SidebarModal({ isOpen, closeOpen }: SidebarModalProps) {
  return (
    <Modal typeModal='board' isOpen={isOpen} closeOpen={closeOpen}>
      <form action='#'>
        <div className='py-3'>
          <label
            htmlFor='board-name'
            className='mb-2 text-blue dark:text-gray-light text-sm block'
          >
            Board name
          </label>
          <input
            type='text'
            name='name'
            id='board-name'
            required
            pattern='[Aa-zZ0-9áéíóú.,\-\s]+'
            placeholder='e.g default board'
            className='border-2 rounded-xl p-2 text-lg w-full
            placeholder:italic placeholder:text-sm placeholder:text-gray-light
            dark:border-gray-light dark:bg-gray-dark dark:focus:bg-gray dark:focus:border-white-dark
            invalid:[&:not(:placeholder-shown):not(:focus)]:border-red valid:[&:not(:placeholder-shown)]:border-blue'
          />
        </div>
        <div className='py-3'>
          <p className='text-blue dark:text-gray-light text-sm mb-2'>Logo</p>
          <div className='flex flex-wrap gap-6'>
            {COUNT_ICONS.map((el) => (
              <IconSvg id={el} key={el} />
            ))}
          </div>
        </div>
        <div className='flex gap-4 py-3'>
          <SaveButton closeModal={closeOpen}  />
          <CancelButton closeModal={closeOpen} />
        </div>
      </form>
    </Modal>
  );
}

export default SidebarModal;
