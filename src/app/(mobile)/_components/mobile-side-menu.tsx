"use client";
import '../../styles/menu.scss';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
    TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.webp";

type TMobileSideMenuProps = {
    openMenu: boolean;
    changeState: () => void;
};

export default function MobileSideMenu({
    openMenu,
    changeState,
}: TMobileSideMenuProps) {
    return (
        <Dialog open={openMenu} onClose={changeState} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={changeState}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Close panel"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">
                                            Close panel
                                        </span>
                                        <XMarkIcon
                                            aria-hidden="true"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex h-full flex-col overflow-y-scroll mobile-drawer-content py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                        <a href="/">
                                            <Image
                                                alt="Applica's logo"
                                                src={logo}
                                                className="h-14 md:h-20 w-auto"
                                                loading="lazy"
                                                height={100}
                                                width={100}
                                            />
                                        </a>
                                    </DialogTitle>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <ul className="list-none pl-3" onClick={changeState}>
                                        <li>
                                            <a href="/#about-us">
                                                about us
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#services">
                                                services
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="https://recruitcrm.io/jobs/applica_corp"
                                                target="_blank"
                                            >
                                                careers
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/contact">contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
