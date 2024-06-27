import { connectDB } from "@/lib/mongodb/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
  try {
    const db = await connectDB();
    const users = db.collection("users");
    const { username, password } = await req.json();
    console.log(username, password);
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        message: "Username and password are required.",
      });
    }
    const user = await users.findOne({ username: username });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found." });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({
        success: false,
        message: "Incorrect password.",
      });
    }
    const response = NextResponse.json({
      success: true,
      message: "Logged in successfully.",
    });
    response.cookies.set("session", user._id, {
      maxAge: 3600,
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// export const PUT = async (req, res) => {
//   try {
//     const db = await connectDB();
//     const users = db.collection("users");

//     // Extract user data from request body
//     const { username, password } = await req.json()

//     if (!username || !password) {
//       return NextResponse.json({ success: false, message: "Username and password are required." });
//     }

//     // Check if user already exists
//     const existingUser = await users.findOne({ username: username });

//     if (existingUser) {
//       return NextResponse.json({ success: false, message: "User already exists." });
//     }

//     // Hash the password before storing it in the database
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

//     // Create user object to insert into database
//     const newUser = {
//       username: username,
//       password: hashedPassword,
//     };

//     // Insert the new user into the database
//     const result = await users.insertOne(newUser);

//     if (result.insertedCount !== 1) {
//       return NextResponse.json({ success: false, message: "Failed to create user." });
//     }

//     return NextResponse.json({ success: true, message: "User created successfully." });

//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ success: false, message: "Internal server error." });
//   }
// };
