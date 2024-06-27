import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// PATCH method for updating an avatar URL
export const PATCH = async (req) => {
  try {
    const db = await connectDB();
    const avatar = db.collection("avatar");
    const { hostedURL } = await req.json();

    const result = await avatar.updateOne(
      { _id: new ObjectId("667bce68f15c525eaf51c52a") },
      { $set: { avatar: hostedURL } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        message: "No document found with the provided '_id'.",
      });
    }

    return NextResponse.json({
      success: true,
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const GET = async (req) => {
  try {
    const db = await connectDB();
    const avatar = db.collection("avatar");
    const result = await avatar.findOne({
      _id: new ObjectId("667bce68f15c525eaf51c52a"),
    });
    if (!result) {
      return NextResponse.json({
        success: false,
        message: "No document found with the provided '_id'.",
      });
    }
    return NextResponse.json({
      avatar: result.avatar
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    });
  }
};
