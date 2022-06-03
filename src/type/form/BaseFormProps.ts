import React, {FormEventHandler} from 'react';

export type BaseFormProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  extraClass?: string;
  onSubmit?: FormEventHandler | undefined;
}
