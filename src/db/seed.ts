import { db, course } from "./schema";

async function seedFakeCourse() {
  try {
    const inserted = await db.insert(course).values({
      userId: "691ff98b-ffe5-4fa8-ab1d-1a38eb70b875",
      title: "Web II",
    });
    console.log("Fake course inserted:", inserted);
  } catch (error) {
    console.error("Error seeding fake course:", error);
  }
}

seedFakeCourse().then(() => process.exit(0));
