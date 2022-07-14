import React, {FC} from 'react';
import BaseSelect from 'react-select';

export type SelectProps = {
  options: { label: string; value: string }[];
  onChange?: any | undefined;
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  return <BaseSelect onChange={props.onChange} styles={{
    control: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted red',
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => ({
      ...styles,
      ':hover': {
        borderBottom: '1px dotted red !important',
      },
    }),
  }} options={props.options}/>;
};
