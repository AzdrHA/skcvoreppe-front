import React from 'react';

export type BaseFormScreenProps = {
  form?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
}
