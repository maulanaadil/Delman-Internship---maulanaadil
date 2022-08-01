import NotFoundModule from '@/modules/not-found';
import React from 'react';
import { Navbar } from '@/components';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <NotFoundModule />
    </div>
  );
}
