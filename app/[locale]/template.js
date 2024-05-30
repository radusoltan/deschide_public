"use client"
import {AnimatePresence} from "framer-motion";

export default function Template({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>
}