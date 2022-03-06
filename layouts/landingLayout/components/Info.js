import Image from "next/image";
import Link from "next/link";
import React from "react";

function Info({
  image,
  title,
  info,
  link,
  background,
  color,
  path,
  className,
}) {
  return (
    <div
      className="info"
      style={{
        color,
        background,
      }}
    >
      <Image src={image} alt="" className="info__image" />
      <div className="info__text">
        <h4>{title}</h4>
        <h6>{info}</h6>
        <Link href={path} style={{ color }} className={className}>
          {link}
        </Link>
      </div>
    </div>
  );
}

export default Info;
