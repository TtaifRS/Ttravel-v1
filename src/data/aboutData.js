import React from "react"
import { FaMoneyCheck } from "react-icons/fa"
import { MdTimer, MdAirplanemodeActive } from "react-icons/md"
import { GiEarthAsiaOceania } from "react-icons/gi"

export const aboutData = [
  {
    icon: <GiEarthAsiaOceania css={"color: #047bf1 "} />,
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: <MdAirplanemodeActive css={"color: #f3a82e "} />,
    title: "1 Million Trips Made",
    desc: "Over 1 Million trips completed",
  },
  {
    icon: <MdTimer css={"color: #f34f2e "} />,
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: <FaMoneyCheck css={"color: #3af576 "} />,
    title: "Best Deals",
    desc: "We offer the best prices",
  },
]
