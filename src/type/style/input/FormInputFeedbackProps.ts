import React from 'react';

export type FormInputFeedbackProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  type: 'warning' | 'danger' | 'success' | 'info'
}
