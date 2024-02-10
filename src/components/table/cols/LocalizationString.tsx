import React from 'react';

type LocalTypes = {
  key: string;
  value: string;
};

export default function LocalizationString({
  LocalizationObject,
  local,
}: {
  LocalizationObject: LocalTypes[];
  local: string;
}) {
  return (
    <span className=" text-base">
      {LocalizationObject.map((Local: LocalTypes) =>
        Local.key === local ? Local.value : '',
      )}
    </span>
  );
}
