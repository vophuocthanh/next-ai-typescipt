import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/stores/sidebar-store';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const SidebarToggle = () => {
  const { isMinimal, handleChangeSidebar, handleOpenOrClose } =
    useSidebarStore();
  return (
    <div className=''>
      <div
        className={cn('cursor-pointer hidden', 'lg:block')}
        onClick={handleChangeSidebar}
        is-navbar-minimal={isMinimal ? 'true' : undefined}
      >
        <Image
          src={`/icons/menu-${isMinimal ? 'open' : 'close'}.svg`}
          alt='sidebar toggle'
          width={24}
          height={24}
          onClick={handleOpenOrClose}
        />
      </div>
      <Button
        variant='ghost'
        className='lg:hidden'
        onClick={handleOpenOrClose}
      ></Button>
    </div>
  );
};

export default SidebarToggle;
