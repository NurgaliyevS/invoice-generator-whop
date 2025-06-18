import { whopSdk } from "@/lib/whop-sdk";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  try {
    const { prompt } = await request.json();
    const headersList = await headers();
    const userToken = await whopSdk.verifyUserToken(headersList);
    if (!userToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = new URL(request.url);
    const match = url.pathname.match(/experiences\/([^/]+)/);
    const experienceId = match ? match[1] : null;

    if (!experienceId) {
      return NextResponse.json(
        { error: "Missing experienceId" },
        { status: 400 }
      );
    }

    const hasAccess = await whopSdk.access.checkIfUserHasAccessToExperience({
      userId: userToken.userId,
      experienceId,
    });
    if (hasAccess.accessLevel !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized, not admin" },
        { status: 401 }
      );
    }

    const updatedExperience = await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data: {
        prompt,
      },
    });

    await whopSdk.notifications.sendPushNotification({
      content: prompt,
      experienceId,
      title: "Prompt updated ✨",
    });

    return NextResponse.json(updatedExperience);
  } catch (error) {
    console.error("Error updating experience:", error);
    return NextResponse.json(
      { error: "Failed to update experience" },
      { status: 500 }
    );
  }
}
