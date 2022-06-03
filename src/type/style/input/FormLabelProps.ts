import React from 'react';

export type FormLabelProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  htmlFor?: string;
  required?: boolean;
}
