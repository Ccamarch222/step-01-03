import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-mono text-justify  flex gap-10 p-10">
      <Link href={"/homePage"}>Homepage</Link>
      <Link href={"/name"}>Namepage</Link>
      </div>
      
     
        
      
        

      
 
    </main>
  );
}
``