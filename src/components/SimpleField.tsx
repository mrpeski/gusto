import React, { useState } from "react";
import { Switch } from "antd";
import { PERSONAL_INFO_LABELS } from "../constants";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

interface Props {
  label: string;
  detail: any;
  toggleShow: (arg: string) => void;
  toggleInternalUse?: (arg: string) => void;
  toggleMandatory?: (arg: string) => void;
}

const SimpleField: React.FC<Props> = ({
  label,
  detail,
  toggleShow,
  toggleInternalUse,
  toggleMandatory,
}) => {
  const title = PERSONAL_INFO_LABELS[label]?.title || label;
  const subtitle = PERSONAL_INFO_LABELS[label]?.subtitle;

  const [switchState, setSwitchState] = useState<boolean>(detail.show);
  const [checkState, setCheckState] = useState<boolean>(
    detail.internalUse || detail.mandatory,
  );

  const onSwitchChange = () => {
    setSwitchState(!switchState);
    toggleShow(label);
  };

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    if (toggleInternalUse) {
      setCheckState(!checkState);
      toggleInternalUse(label);
      return;
    }
    if (toggleMandatory) {
      setCheckState(!checkState);
      toggleMandatory(label);
    }
  };

  return (
    <li className="Field-wrapper">
      <span className="Field">
        {title}
        {subtitle ? (
          <span className="Field-subtitle"> ({subtitle})</span>
        ) : null}
      </span>
      <Checkbox checked={checkState} onChange={onCheckboxChange}>
        {toggleInternalUse ? "Internal" : "Mandatory"}
      </Checkbox>

      <label htmlFor="">
        <Switch
          checked={switchState}
          data-target={label}
          onChange={onSwitchChange}
        />
        <span className="Switch-label">{switchState ? "Show" : "Hide"}</span>
      </label>
    </li>
  );
};

export default SimpleField;
