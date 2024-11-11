import { NextResponse } from "next/server";

export async function GET() {
  const token = "pss_service:v1:73be6f439fa64cd9fe45f869353830b65828878085dd7873050688669f14c976:8c226b9259381594cfc309621de926d98f8f3f4172f7b725940a44dc7effbe7c:febccf44f504fdec7c05f2749d5176869a74dd2d5d81bb993d0dfc67057e19e7:01a75d83071b149af221a2d12eda7d042066060cc2e3940e95b03d462686d0e0";
  
  const url = new URL('https://api.phase.dev/v1/secrets/');
  const headers = {
    'Authorization': `Bearer ${token}`
  };

  // Append query parameters to the URL object
  url.searchParams.append('app_id', 'aadf6368-9394-46c8-b097-39a6843c9c12');
  url.searchParams.append('env', 'production');
  url.searchParams.append('path', '/');
  url.searchParams.append('key', 'DEBUG');

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json(
      { result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}
