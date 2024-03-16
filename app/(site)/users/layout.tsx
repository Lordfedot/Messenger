import Sidebar from "@/components/sidebar/sidebar";
import UserList from "@/components/users/users-list";
import useUsers from "@/hooks/useUsers";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await useUsers();
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;