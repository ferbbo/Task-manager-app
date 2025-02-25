import Image from "next/image";
import Modal from "@/components/Modal";
import InputText from "@/components/InputText";
import StatusSelect from "@/components/StatusSelect";
import TagsSelect from "@/components/TagsSelect";

import type { StatusLabel } from "@/app/types";
import CancelButton from "@/app/components/CancelButton";
import SaveButton from "@/app/components/SaveButton";
import RemoveButton from "@/app/components/RemoveButton";

interface TaskModalProps {
  isOpen: boolean;
  closeOpen: () => void;
  image?: string;
  image_alt?: string;
  name?: string;
  status?: StatusLabel;
  tags?: string[];
}

let value = "diego";

function TaskModal({
  isOpen,
  closeOpen,
  image,
  image_alt,
  name,
  status,
  tags,
}: TaskModalProps) {
  const handleInput = (target) => {
    value = target.value;
  };
  return (
    <Modal typeModal='task' isOpen={isOpen} closeOpen={closeOpen}>
      <form action='#' className='flex flex-col gap-4'>
        {image ? (
          <figure className='group rounded-lg aspect-[16/5] overflow-hidden w-full relative object-cover'>
            <Image
              src={image}
              alt={image_alt}
              fill={true}
              priority={true}
              sizes='100%'
            ></Image>
            <div className='absolute flex -z-10 group-hover:z-0 items-center justify-center rounded-lg aspect-[16/5] overflow-hidden w-full bg-black-95'>
              <RemoveButton removeCover={() => {}} />
            </div>
          </figure>
        ) : (
          <div
            className='rounded-lg aspect-[16/5] overflow-hidden w-full 
        relative object-cover bg-gray text-gray-light font-bold text-xl flex items-center justify-center'
          >
            No cover photo
          </div>
        )}

        <InputText label={name} value='diego' onInput={handleInput} />
        <StatusSelect />
        <TagsSelect />
        <div className='flex gap-4 py-3'>
          <SaveButton closeModal={closeOpen} />
          <CancelButton closeModal={closeOpen} />
        </div>
      </form>
    </Modal>
  );
}

export default TaskModal;
