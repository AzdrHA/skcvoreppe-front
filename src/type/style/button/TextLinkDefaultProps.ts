import React from 'react';

export type TextLinkDefaultProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  to: string;
}
