import Sidebar from "@/components/sidebar/sidebar";
import UserList from "@/components/users/users-list";
import getUsers from "@/actions/getUsers";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUsers();
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
