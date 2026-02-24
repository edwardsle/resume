import { Fragment } from "react/jsx-runtime";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  Transition,
  TransitionChild,
} from '@headlessui/react';

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={DialogBackdrop}
          className="fixed inset-0 bg-black bg-opacity-50"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        />

        {/* Panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={DialogPanel}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex justify-end p-2">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="p-4">
                {children}
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
