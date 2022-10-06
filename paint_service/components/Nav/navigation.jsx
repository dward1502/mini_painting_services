import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./navigation.module.scss";

const Navigation = (image) => {
  return (
    <div className={style.header}>
      <Image
        src={"/images/tzeench_army.jpg"}
        layout="fill"
        className={style.img}
      />
      <nav className={style.navBar}>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/#"}>
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href={"/#"}>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href={"/#"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
