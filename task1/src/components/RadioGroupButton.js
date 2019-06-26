import React from "react";
import { Button, FormControlLabel, RadioGroup, Radio, FormControl } from "@material-ui/core";

const RadioGroupButton = ({ valueArray, radioValue, onChange, ...props }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={radioValue} onChange={onChange} row>
        {valueArray.map(({ value, label }, index) => {
          return (
            <FormControlLabel
              key={index}
              value={value}
              control={<Radio color="primary" />}
              label={label}
              labelPlacement="top"
            />
          );
        })}
      </RadioGroup>
      {props.children}
    </FormControl>
  );
};

export { RadioGroupButton };
