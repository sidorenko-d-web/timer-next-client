'use client'
import { AccountSettings } from "../../app/settings/AccountSettings";
import { TimerSettings } from "../../app/settings/TimerSettings";

export const Settings = ({ windowSettings }: { windowSettings: string }) => {
  switch (windowSettings) {
    case "Account":
      return <AccountSettings />;
    case "Timer":
      return <TimerSettings />;
    case "Sessions":
      return <AccountSettings />;
  }
};
