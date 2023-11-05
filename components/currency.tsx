"use client"
import React, { useEffect, useState } from "react";
type CurrencyProps = {
  value: number | string;
};
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BDT",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
