"use client";

import axios from "axios";
import { useRef } from "react";

export default function Signin() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
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
            axios.post("http://localhost:3000/api/v1/signin", {
              username: userRef?.current?.value,
              password: passwordRef?.current?.value,
            });
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
