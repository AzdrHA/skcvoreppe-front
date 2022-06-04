import React from 'react';

export type ExternalTextLinkDefaultProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  to: string;
}
