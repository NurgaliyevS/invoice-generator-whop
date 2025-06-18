import { whopSdk } from "@/lib/whop-sdk";
import { headers } from "next/headers";

export async function GET() {
  try {
    const headersList = await headers();
    const userToken = await whopSdk.verifyUserToken(headersList);

    if (!userToken) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    return Response.json({ userId: userToken.userId });
  } catch (error) {
    console.error("Error getting user:", error);
    return Response.json({ error: "Failed to get user" }, { status: 500 });
  }
}
