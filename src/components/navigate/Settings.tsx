import React, { useState } from "react";
import { AccountSettings } from "../../app/settings/AccountSettings";

export const Settings = ({ windowSettings }: { windowSettings: string }) => {
  switch (windowSettings) {
    case "Account":
      return <AccountSettings />;
    case "Timer":
      return <AccountSettings />;
    case "Sessions":
      return <AccountSettings />;
  }
};
