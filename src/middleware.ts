import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl;

    if( pathname === '/landing-staff-augmentation' ) {
        //return NextResponse.redirect( new URL( "/", request.url ) );
    }

    const userAgent = request.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iP(ad|hone)/i.test(userAgent);

    const response = NextResponse.next();
    response.cookies.set("isMobile", isMobile.toString(), { httpOnly: true });

    return response;
}
