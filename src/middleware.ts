import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iP(ad|hone)/i.test(userAgent);

    const response = NextResponse.next();
    response.cookies.set("isMobile", isMobile.toString(), { httpOnly: true });

    return response;
}
