import * as React from 'react';
import { useId } from '@fluentui/react-utilities';
import { makeStyles, shorthands } from '@griffel/react';
import { Dropdown, DropdownProps, Option } from '@fluentui/react-combobox';

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: 'grid',
    gridTemplateRows: 'repeat(1fr)',
    justifyItems: 'start',
    ...shorthands.gap('2px'),
    maxWidth: '400px',
  },
});

export const Default = (props: Partial<DropdownProps>) => {
  const dropdownId = useId('dropdown-default');
  const options = ['Cat', 'Dog', 'Ferret', 'Fish', 'Hamster', 'Snake'];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={dropdownId}>Best pet</label>
      <Dropdown aria-labelledby={dropdownId} placeholder="Select an animal" {...props}>
        {options.map(option => (
          <Option key={option} disabled={option === 'Ferret'}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
