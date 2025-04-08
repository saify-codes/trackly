"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counter";
import { RootState } from "../providers/StoreProvider";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function IndexPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <AppSidebar />
      <SidebarTrigger />
    </>
  );
}
