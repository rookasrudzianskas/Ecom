import {validatePreviewUrl} from "@sanity/preview-url-secret";
import {client} from "@/sanity/lib/client";
import {draftMode} from "next/headers";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";

const token = process.env.SANITY_API_READ_TOKEN;

export async function GET(request: Request) {
  (await draftMode()).disable();

  return NextResponse.redirect(new URL("/", request.url));
}
