import { redirect } from "@sveltejs/kit";

// export async function load({ params }) {
//     const req = await fetch(`${url}/urls/${params.shortUrl}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     });
//     const res = await req.json();

//     if (res.status === "fail") {
//         return { status: res.error.status, message: res.message };
//     }

//     redirect(301, res.data.url);
// }
