import React from 'react';

export type ExternalTextLinkDefaultProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  beforeIcon?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string | undefined;
  to: string;
  hiddenExternalLink?: boolean | undefined;
}
