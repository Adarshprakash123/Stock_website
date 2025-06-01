import Image from "next/image";

export default function ImageTest() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Testing Local Images</h2>

      {/* Using next/image (Recommended way) */}
      <div className="space-y-2">
        <h3 className="font-semibold">Using next/image:</h3>
        <Image
          src="/test-image.jpg" // Place your image in public folder
          alt="Test image"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Using regular img tag */}
      <div className="space-y-2">
        <h3 className="font-semibold">Using regular img tag:</h3>
        <img
          src="/test-image.jpg" // Place your image in public folder
          alt="Test image"
          className="w-[300px] h-[200px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
