import getCurrentUser from "@/actions/getCurrentUser";
import BackButton from "@/components/back-button";
import SettingsForm from "@/components/settings/settings-form";

const SettingsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full p-12">
      <BackButton href="/conversations"/>
      <div className="bg-neutral-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 shadow-2xl rounded-lg">
        <SettingsForm currentUser={currentUser!} />
      </div>
    </div>
  );
};

export default SettingsPage;
