import { type ReactNode } from "react";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";

export function Header(): ReactNode {
  return (
    <header className="flex items-center justify-between px-2.5 py-1">
      <div className="flex grow basis-0 justify-start">
        <div className="flex gap-2">
          <div className="text-ctp-red">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1548 0.554503C9.76636 0.457628 8.60322 1.40216 8.2622 2.65548L7.54361 5.34376C7.57406 5.34376 7.61059 5.34376 7.64104 5.34376C18.4016 5.34376 27.1282 14.0201 27.1282 24.7188C27.1282 24.749 27.1282 24.7854 27.1282 24.8156L29.8321 24.1012C31.0987 23.7682 32.0426 22.6057 31.9452 21.2252C31.1779 10.1572 22.2869 1.31739 11.1548 0.554503ZM25.1673 25.3363C25.1734 25.1305 25.1795 24.9246 25.1795 24.7188C25.1795 15.0858 17.3298 7.28126 7.64104 7.28126C7.43399 7.28126 7.22694 7.28731 7.01989 7.29337L0.850979 30.283C0.759633 30.616 0.857069 30.9733 1.10066 31.2154C1.34425 31.4576 1.70354 31.5545 2.03848 31.4637L25.1673 25.3363ZM11.5385 13.0938C12.0553 13.0938 12.551 13.2979 12.9164 13.6612C13.2819 14.0246 13.4872 14.5174 13.4872 15.0313C13.4872 15.5451 13.2819 16.0379 12.9164 16.4013C12.551 16.7646 12.0553 16.9688 11.5385 16.9688C11.0216 16.9688 10.526 16.7646 10.1605 16.4013C9.79507 16.0379 9.58976 15.5451 9.58976 15.0313C9.58976 14.5174 9.79507 14.0246 10.1605 13.6612C10.526 13.2979 11.0216 13.0938 11.5385 13.0938ZM15.4359 20.8438C15.4359 20.3299 15.6412 19.8371 16.0067 19.4737C16.3721 19.1104 16.8678 18.9063 17.3846 18.9063C17.9015 18.9063 18.3971 19.1104 18.7626 19.4737C19.128 19.8371 19.3333 20.3299 19.3333 20.8438C19.3333 21.3576 19.128 21.8504 18.7626 22.2138C18.3971 22.5771 17.9015 22.7813 17.3846 22.7813C16.8678 22.7813 16.3721 22.5771 16.0067 22.2138C15.6412 21.8504 15.4359 21.3576 15.4359 20.8438ZM6.66668 23.75C6.66668 23.2362 6.87199 22.7433 7.23745 22.38C7.60291 22.0166 8.09857 21.8125 8.6154 21.8125C9.13223 21.8125 9.6279 22.0166 9.99335 22.38C10.3588 22.7433 10.5641 23.2362 10.5641 23.75C10.5641 24.2639 10.3588 24.7567 9.99335 25.12C9.6279 25.4834 9.13223 25.6875 8.6154 25.6875C8.09857 25.6875 7.60291 25.4834 7.23745 25.12C6.87199 24.7567 6.66668 24.2639 6.66668 23.75Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-script hidden text-3xl font-semibold md:block">
            Placeholder Inc.
          </span>
        </div>
      </div>
      <Navigation />
      <div className="flex grow basis-0 justify-end">
        <UserProfile />
      </div>
    </header>
  );
}