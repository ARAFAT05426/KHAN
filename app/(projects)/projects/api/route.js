import { connectDB } from "@/lib/mongodb/connectDB";
export const GET = async (req, res) => {
  const db = await connectDB();
  const collection = db.collection("projects"); // Assuming your collection name is 'projects'
  try {
    const projects = await collection.find().toArray();
    return Response.json({ success: true, data: projects }); // Send projects data as JSON Responseponse
  } catch (error) {
    return Response.json({ success: false, message: error.message }); // Handle errors
  }
};
