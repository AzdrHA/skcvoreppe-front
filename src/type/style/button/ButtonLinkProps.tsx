import React from 'react';
import {To} from 'react-router';

export type ButtonLinkProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  to: To;
}
