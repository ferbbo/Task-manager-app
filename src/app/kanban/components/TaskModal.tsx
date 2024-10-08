import Image from "next/image";
import Modal from "@/components/Modal";
import InputText from "@/components/InputText";
import StatusSelect from "@/components/StatusSelect";
import TagsSelect from "@/components/TagsSelect";

import type { StatusLabel } from "@/app/types";

interface TaskModalProps {
  isOpen: boolean;
  closeOpen: () => void;
  image?: string;
  image_alt?: string;
  name?: string;
  status?: StatusLabel;
  tags?: string[];
}

function TaskModal({
  isOpen,
  closeOpen,
  image,
  image_alt,
  name,
  status,
  tags,
}: TaskModalProps) {
  return (
    <Modal typeModal='task' isOpen={isOpen} closeOpen={closeOpen}>
      <form action='#' className='flex flex-col gap-4'>
        <figure className='rounded-lg aspect-[16/5] overflow-hidden w-full relative object-cover'>
          <Image
            src={image}
            alt={image_alt}
            fill={true}
            priority={true}
            sizes='100%'
          ></Image>
        </figure>
        <InputText label={name} />
        <StatusSelect />
        <TagsSelect />
      </form>
    </Modal>
  );
}

export default TaskModal;
