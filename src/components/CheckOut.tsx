
"use client";

import { useSession } from "next-auth/react";
import Script from "next/script";
import { useState, forwardRef, useImperativeHandle } from "react";

const Checkout = forwardRef((_props, ref) => {
  const [loading, setLoading] = useState(false);
  const { data:session } = useSession();


  useImperativeHandle(ref, () => ({
    pay: (amount: number) => handlePayment(amount),
  }));

  const handlePayment = async (amount: number) => {
    setLoading(true);

    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "CheatCoder",
      description: "Test Transaction",
      order_id: data.id,
      handler: function (response: any) {
        //verify payment
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);

      },
      prefill: {
        name: session?.user?.name , 
        email: session?.user?.email,
        contact: "9293344322",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return <Script src="https://checkout.razorpay.com/v1/checkout.js" />;
});

export default Checkout;
