import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Background({
  imgUrl,
  styles,
}: {
  imgUrl: string;
  styles: string;
}) {
  return <div className={`${styles}`} style={{ backgroundImage: `url(${imgUrl})` }} />
}
