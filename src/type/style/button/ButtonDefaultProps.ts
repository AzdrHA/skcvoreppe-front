import React, {MouseEventHandler} from 'react';

export type ButtonDefaultProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean | undefined;
}
