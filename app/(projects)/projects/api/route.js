import { connectDB } from "@/lib/mongodb/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  const db = await connectDB();
  const projects = db.collection("projects");
  try {
    const result = await projects.find().toArray();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
export const POST = async (req, res) => {
  const db = await connectDB();
  const projects = db.collection("projects");
  try {
    const data = await req.json();
    const result = await projects.insertOne(data);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
export const DELETE = async (req, res) => {
  const db = await connectDB();
  const projects = db.collection("projects");

  const { id } = await req.json();
  try {
    const result = await projects.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({
      success: true,
      message: "Project deleted successfully",
      result,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
export const PUT = async (req, res) => {
  const db = await connectDB();
  const projects = db.collection("projects");
  const { id, updateData } = await req.json();
  console.log(updateData);
  try {
    const result = await projects.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData } }
    );

    return NextResponse.json({
      success: true,
      result
    });
  } catch (error) {
    return NextResponse.status(500).json({ success: false, message: error.message });
  }
};

