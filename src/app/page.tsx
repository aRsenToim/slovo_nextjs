"use client"

import { BlockInfo, learnStore } from "@/entities/products";
import { useEffect } from "react";


export default function Home() {
  const { setInfo, count, isLearnCount, noisLearnCount } = learnStore()
  useEffect(() => {
    setInfo()
  }, [])
  return <div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <BlockInfo title={`${count}`} desc="Слов, вы добавили в slovo" />
      <BlockInfo title={`${isLearnCount}`} desc="Слов, выучено вами" />
      <BlockInfo title={`${noisLearnCount}`} desc="Слов, предстаит изучить вам" />
    </div>
  </div>
}
