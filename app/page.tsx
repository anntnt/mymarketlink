/*  import { Button } from '@/components/ui/button';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';*/
'use client';
import {
  Alert,
  Avatar,
  Breadcrumb,
  Button,
  Checkbox,
  DarkThemeToggle,
  Dropdown,
  Footer,
  Label,
  TextInput,
  ThemeModeScript,
} from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiInformationCircle } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <DarkThemeToggle />
      <br />
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </main>
  );
}
