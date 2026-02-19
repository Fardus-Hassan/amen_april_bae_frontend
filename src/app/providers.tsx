"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import SmoothScroll from "@/components/SmoothScroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SmoothScroll>{children}</SmoothScroll>
    </Provider>
  );
}
