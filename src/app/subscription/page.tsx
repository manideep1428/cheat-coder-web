"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Placeholder: Replace with real logic for offer status, expiry, and usage
type OfferStatus = "active" | "expired" | "used" | "not-eligible";

const getOfferStatus = (): { status: OfferStatus; expiry?: string; requestsLeft?: number } => {
  // TODO: Replace with real user/DB logic
  // For demo: always active, expires in 2 days, 3 requests left
  return {
    status: "active",
    expiry: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleString(),
    requestsLeft: 3,
  };
};

export default function SubscriptionPage() {
  const offer = getOfferStatus();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {/* First Sign-in Offer */}
      <Alert className="mb-8 bg-gradient-to-r from-yellow-200 to-pink-100 border-yellow-400">
        <AlertTitle className="text-lg font-bold text-pink-700 flex items-center gap-2">
          🎉 First Sign-In Offer!
        </AlertTitle>
        <AlertDescription className="text-gray-700">
          <span className="font-semibold">Get 3 requests for just <span className="text-rose-600 font-bold">#19</span>!</span> <br />
          <span>Offer valid for 2 days from your first sign-in.</span>
          <br />
          {offer.status === "active" && (
            <span>
              <strong>Expires:</strong> {offer.expiry} <br />
              <strong>Requests left:</strong> {offer.requestsLeft}
            </span>
          )}
          {offer.status === "expired" && (
            <span className="text-red-600 font-semibold">Offer expired</span>
          )}
          {offer.status === "used" && (
            <span className="text-green-700 font-semibold">Offer used up</span>
          )}
          {offer.status === "not-eligible" && (
            <span className="text-gray-500">Not eligible for this offer</span>
          )}
        </AlertDescription>
        {offer.status === "active" && (
          <Button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold">Claim Now</Button>
        )}
      </Alert>

      {/* Subscription Plans */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-lg border-blue-300">
          <CardHeader>
            <CardTitle>Monthly Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">#99</div>
            <div className="mb-4 text-gray-600">Unlimited requests for 30 days</div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full">Subscribe</Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-green-300">
          <CardHeader>
            <CardTitle>Pay Per Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">#10</div>
            <div className="mb-4 text-gray-600">Per request</div>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full">Buy Request</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
