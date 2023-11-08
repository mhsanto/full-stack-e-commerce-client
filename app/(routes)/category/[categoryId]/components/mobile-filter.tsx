"use client";
import { useState } from "react";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};
const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <Dialog
        as="div"
        open={open}
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        {/* background */}
        <div className="fixed bg-black/40 inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white p-4 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <Filter valueKey="sizeId" data={sizes} name="Sizes" />
            <Filter valueKey="colorId" data={colors} name="Colors" />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
