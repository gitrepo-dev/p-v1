import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DetailsTiles from "components/detailstiles/DetailsTiles";
import Background from "components/background";

export default function CreateEvent() {

  const dispatch = useDispatch()

  return (
    <>
      <Background imgUrl={'https://images.unsplash.com/photo-1664710696502-69589bfc2ef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=800&q=80'} styles={'bg-img'} />
      <DetailsTiles />
    </>
  )
}
