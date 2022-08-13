/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from "../Assects/icon/logo.png"
import Toggle from "./Toggle"
import { faCalendarDays, faGears, faHomeLg, faProjectDiagram, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import NotificationsSidebar from './NotificationSidebar'


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { id: 1, name: 'Dashboard', icon: faHomeLg, path: '/', current: false },
  { id: 2, name: 'Team', icon: faUserFriends, path: '/', current: false },
  { id: 3, name: 'Projects', icon: faProjectDiagram, path: '/project', current: false },
  { id: 4, name: 'Calendar', icon: faCalendarDays, path: '/calender', current: false },
  { id: 5, name: 'Reports', icon: faGears, path: '/setting', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [activebtn, setActiveBtn] = useState({ activeId: 1 });

  const ActiveHandle = (id) => {
    setActiveBtn({ activeId: id })
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="">
        <Disclosure as="nav" className=" dark:bg-slate-900 shadow-sm border-b  duration-100 dark:border-slate-700 transition-all">
          {({ open }) => (
            <>
              <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex items-center justify-between head-height">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={Logo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {/* {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">

                    <div className="ml-4 flex items-center md:ml-6">
                      <Toggle />
                      <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="relative bg-gray-400 dark:bg-pink-600 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 dark:bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 dark:bg-pink-200"></span>
                        </span>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden transition-all">
                    {/* Mobile menu button */}
                    <Toggle />
                    <button
                      type="button"
                      className="ml-auto relative bg-gray-400 dark:bg-pink-600 flex justify-center items-center p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white h-8 w-8 mr-3"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" onClick={() => setOpen(!open)}/>
                      <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 dark:bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 dark:bg-pink-200"></span>
                      </span>
                    </button>
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none ">
                      <span className="sr-only">Open main menu</span>

                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden fixed left-0 bg-gray-50 transition-all duration-500 dark:bg-slate-900 z-10 h-screen w-60 border-r border-t dark:border-slate-600">
                
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                      >
                        <Link to={item.path}
                          onClick={() => ActiveHandle(item.id)}
                          className={`dark:text-gray-200 ${activebtn.activeId === item.id && 'bg-gray-300 dark:bg-pink-600 dark:text-gray-50'}
                        flex px-3 py-3 rounded-md gap-x-2 text-base font-medium items-center`}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <FontAwesomeIcon icon={item.icon} /> {item.name}
                        </Link>
                      </Disclosure.Button>
                    ))}
                  </div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative w-full">
                  <Menu as="div">
                      <Menu.Button className="flex items-center gap-4 p-2 bg-gray-300 dark:bg-pink-600 dark:text-gray-50 w-full rounded text-gray-500 font-medium">

                      <div className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">

                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </div>
                      <h5>Jerry Wilson</h5>
                      </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-bottom-left top-12 absolute left-5 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {
        open && <NotificationsSidebar open={open} setOpen={setOpen} />
      }
    </>
  )
}
