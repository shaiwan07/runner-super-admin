import { Href, ImagePath } from "@/Constant";
// import { userProfileData } from "@/Data/Layout/Header";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";
import { FileText, Mail, Settings, User } from "react-feather";

const UserProfile = () => { 
  const { data: session } = useSession();

   const userProfileData = [
      {
          icon: <User />,
          title: "Account",
          link: "/app/users/user_profile",
      },
      {
          icon: <Mail />,
          title: "Inbox",
          link: "/app/email/letter_box",
      },
      {
          icon: <FileText />,
          title: "Taskboard",
          link: "/app/tasks",
      },
      {
          icon: <Settings />,
          title: "Settings",
          link: "/app/users/edit_profile",
      },
  ];

  const handleLogout = () => {
    signOut();
  };
  return (
    <li className='profile-nav onhover-dropdown p-0'>
      <div className='d-flex align-items-center profile-media'>
        <Image className='b-r-10 img-40 img-fluid' width={40} height={40} src={session?.user?.image || `${ImagePath}/dashboard/profile.png`} alt='' />
        <div className='flex-grow-1'>
          <span>{session?.user?.email}</span>
          <p className='mb-0'>{session?.user?.name || 'Shaiwan'}</p>
        </div>
      </div>
      <ul className='profile-dropdown onhover-show-div'>
        {userProfileData.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.link}`}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <li onClick={handleLogout}>
          <Link href={Href}>
            <LogOut />
            <span>{"Log out"}</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default UserProfile;
