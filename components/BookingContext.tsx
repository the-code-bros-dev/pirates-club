"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type BookingContextType = {
  bookingOpen: boolean;
  setBookingOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const BookingContext =
  createContext<BookingContextType | undefined>(
    undefined
  );

export function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookingOpen, setBookingOpen] =
    useState(false);

  return (
    <BookingContext.Provider
      value={{ bookingOpen, setBookingOpen }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBooking must be used within BookingProvider"
    );
  }

  return context;
}