import React from 'react';

export type ButtonDefaultProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
