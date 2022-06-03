import React from 'react';

export type ButtonLinkProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
}
