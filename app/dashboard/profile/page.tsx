import CardEditProfile from "@/components/profile/components/card-edit-profile";

export default function Profile() {
  return (
    <div className="mx-15 mt-15">
      <h1 className="font-bold">Edit Profile</h1>
      <p className="text-[16px]">
        Update your personal information and portfolio details
      </p>

      <div className="mt-10">
        <CardEditProfile />
      </div>
    </div>
  );
}
