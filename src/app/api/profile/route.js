import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Types } from "mongoose";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import User from "@/models/User";


export async function GET(req){

  try {
    await connectDB();
    const profile = await Profile.find({published : true}).select("-userId");
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" , data : profile },
      { status: 201 , data : profile }
    );
  } catch (error) {
    return NextResponse.json({error : "مشکلی در سرور رخ داده است"},{status : 500})
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      typeofnotice,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "لطفا حساب کاربری خود را ایجاد کنید" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category||
      !typeofnotice

    ) {
      return NextResponse.json(
        { error: "لطفااطلاعات صحیح را وارد کنید" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      category,
      typeofnotice,
      rules,
      amenities,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      typeofnotice,
      amenities,
      rules,
    } = body;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !_id,
      !title,
      !description,
      !location,
      !phone,
      !price,
      !realState,
      !constructionDate,
      !category,
      !typeofnotice
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
   
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json({error : "دسترسی شما به این آگهی محدود شده است"}, {status : 403});
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.price = price;
    profile.realState = realState; 
    profile.constructionDate = constructionDate; 
    profile.category = category; 
    profile.typeofnotice = typeofnotice;
    profile.amenities = amenities;  
    profile.rules = rules; 
    profile.save();
    return NextResponse.json({message : "آگهی با موفقیت ویرایش شد"},{status : 200})
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
