"use client";

import AccountStats from "./AccountStats";
import OwnProfileCard from "./OwnProfileCard";
import PersonalInfoForm from "./PersonalInfoForm";

export default function MyProfileContent() {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <PersonalInfoForm />
        </div>

        <div className="col-span-4 space-y-4">
          <OwnProfileCard />
          <AccountStats />
        </div>
      </div>
    </div>
  );
}
