// components/Marquee.js
import { Card, CardContent } from "@/components/ui/card"; // Import shadcn UI components
import Image from "next/image";

export default function Marquee() {
  return (
    <Card className="bg-white border-none bg-opacity-50 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center animate-marquee space-x-8">
          {/* Replace these image src attributes with your actual image paths */}
          <Image
            src="/images/NECTAR.png" // Ensure these paths are correct and images are available in your public folder
            alt="Image 1"
            className="h-32 w-32 object-cover rounded-lg"
          />
          <Image
            src="/images/nitap.jpg"
            alt="Image 2"
            className="h-32 w-32 object-cover rounded-lg"
          />
          <Image
            src="/images/meity.png"
            alt="Image 3"
            className="h-32 w-82 object-cover rounded-lg"
          />
          <Image
            src="/images/teqiplogo.png"
            alt="Image 4"
            className="h-32 w-82 object-cover rounded-lg"
          />
           <Image
            src="/images/SERB.png"
            alt="Image 4"
            className="h-32 w-82 object-cover rounded-lg"
          />
          {/* Add more images as needed */}
        </div>
      </CardContent>
    </Card>
  );
}
