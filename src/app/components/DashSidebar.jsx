'use client';

import {
  Sidebar,
  SidebarItems,
  SidebarItem,
  SidebarItemGroup,
} from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiChartPie,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SignOutButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function DashSidebar() {
  const [tab, setTab] = useState('');
  const searchParams = useSearchParams();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);

  if (!isSignedIn) return null;

  return (
    <Sidebar className='w-full md:w-56'>
      <SidebarItems>
        <SidebarItemGroup className='flex flex-col gap-1'>
          {user?.publicMetadata?.isAdmin && (
            <Link href='/dashboard?tab=dash'>
              <SidebarItem
                as='div'
                icon={HiChartPie}
                active={tab === 'dash' || !tab}
              >
                Dashboard
              </SidebarItem>
            </Link>
          )}

          <Link href='/dashboard?tab=profile'>
            <SidebarItem
              as='div'
              icon={HiUser}
              active={tab === 'profile'}
              label={user?.publicMetadata?.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
            >
              Profile
            </SidebarItem>
          </Link>

          {user?.publicMetadata?.isAdmin && (
            <Link href='/dashboard?tab=posts'>
              <SidebarItem
                as='div'
                icon={HiDocumentText}
                active={tab === 'posts'}
              >
                Posts
              </SidebarItem>
            </Link>
          )}

          {user?.publicMetadata?.isAdmin && (
            <Link href='/dashboard?tab=users'>
              <SidebarItem
                as='div'
                icon={HiOutlineUserGroup}
                active={tab === 'users'}
              >
                Users
              </SidebarItem>
            </Link>
          )}

          <SidebarItem as='div' icon={HiArrowSmRight} className='cursor-pointer'>
            <SignOutButton />
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
