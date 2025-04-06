import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

export default function Nav() {
  return (
    <div
      style={{ paddingTop: '10px', paddingBottom: '12px' }}
      className="navbar fixed w-full flex md:flex-row px-4 md:px-6 py-2 md:py-6 md:pb-7 z-30 bg-sky text-paper md:h-full items-center justify-between
                md:static md:w-auto md:bg-sky md:text-paper md:max-h-screen md:justify-between
                      child:pl-2 child:md:pl-0 child:text-lg "
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Link href="/">
          <img src="/images/favicon.jpeg" style={{ width: '32px', height: '28px' }} />
        </Link>
        <div
        style={{ marginTop: '-8px', gap: '20px', fontSize: '14px', color: 'silver' }}
          className="md:flex child:pl-3 md:text-xl child:md:pl-1 child:md:pt-2 hidden md:flex-row
          child:brightness-100  child:transition"
        >
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/projects">Publications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog">Events</Link>
          <Link href="/blog">Members</Link>
          <Link href="/blog">Contact</Link>
        </div>
      </div>
      <div className="child:mr-3 -ml-0.5 child:w-8 child:brightness-100 child:transition hidden md:flex">
        <a
          href="mailto:ryan.yan.it@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/yunxiang-yan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/RaccoonOnion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.kaggle.com/raconion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaKaggle />
        </a>
      </div>
    </div>
  );
}