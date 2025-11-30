"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signup() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="border p-2">
        <input ref={userRef} type="text" placeholder="Username"></input>
      </div>
      <div className="border p-2">
        <input ref={passwordRef} type="password" placeholder="Password"></input>
      </div>
      <div className="border p-2">
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup", {
              username: userRef?.current?.value,
              password: passwordRef?.current?.value,
            });
            router.push("/signin");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
