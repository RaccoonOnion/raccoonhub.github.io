import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

export default function Nav() {
  return (
    <div
      style={{ 
        display: 'flex',
        flexGrow: 1,
        paddingInline: '1rem',
        paddingTop: '10px', 
        paddingBottom: '12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%', 
        width: 'auto',
        position: 'static',
        zIndex: 30,
              }}
      className="navbar bg-sky text-paper
                md:static md:bg-sky md:text-paper"
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