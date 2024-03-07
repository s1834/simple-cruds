import connectDB from "@/app/lib/mongodb";
import Detail from "@/app/models/detail";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, phone, email, hobbies } = await req.json();

  try {
    await connectDB();
    await Detail.create({ fullname, phone, email, hobbies });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      console.log(errorList);

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }

  return NextResponse.json({ msg: ["hi from detail route.js"] });
}
