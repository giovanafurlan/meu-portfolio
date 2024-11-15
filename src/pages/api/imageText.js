import { NextResponse } from "next/server";
import Replicate from "replicate";

export const config = {
  runtime: "edge",
};

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export default async function handler(req) {
  const formData = await req.formData();
  const imageFile = formData.get("image");

  const imageData = await imageFile.arrayBuffer();

  const output = await replicate.run(
    "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
    {
      input: {
        image: new Blob([imageData], { type: imageFile.type }),
      },
    }
  );

  return NextResponse.json(output);
}
