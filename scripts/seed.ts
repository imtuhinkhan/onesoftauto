import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });
config({ path: resolve(process.cwd(), ".env") });

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI is required in .env or .env.local");
  process.exit(1);
}

async function seed() {
  await mongoose.connect(MONGODB_URI!);

  const { User } = await import("../models/User");
  const { Service } = await import("../models/Service");
  const { Blog } = await import("../models/Blog");
  const { CaseStudy } = await import("../models/CaseStudy");
  const { Testimonial } = await import("../models/Testimonial");
  const { Settings } = await import("../models/Settings");
  const {
    seedServices,
    seedBlogs,
    seedCaseStudies,
    seedTestimonials,
    agencyStats,
  } = await import("../lib/data/seed");

  await Promise.all([
    User.deleteMany({}),
    Service.deleteMany({}),
    Blog.deleteMany({}),
    CaseStudy.deleteMany({}),
    Testimonial.deleteMany({}),
    Settings.deleteMany({}),
  ]);

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@onesoftauto.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";
  const hashed = await bcrypt.hash(adminPassword, 12);

  await User.create({
    name: "Admin",
    email: adminEmail,
    password: hashed,
    role: "admin",
  });

  await Service.insertMany(seedServices);
  await Blog.insertMany(seedBlogs);
  await CaseStudy.insertMany(seedCaseStudies);
  await Testimonial.insertMany(seedTestimonials);
  await Settings.create({
    siteName: "Onesoftauto",
    tagline: "Premium Software Development",
    email: "hello@onesoftauto.com",
    phone: "",
    address: "Dhaka, Bangladesh",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
    stats: agencyStats,
  });

  console.log("Seed complete!");
  console.log(`Admin login: ${adminEmail} / ${adminPassword}`);
  await mongoose.disconnect();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
