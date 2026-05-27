import getMongoClient from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const db = client.db(process.env.MONGODB_DB || "portfolio");

    await db.collection("contacts").insertOne({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
    });

    return Response.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
