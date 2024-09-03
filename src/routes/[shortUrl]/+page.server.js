import { redirect } from "@sveltejs/kit";
import { getFullUrl } from "../../lib/server/api";

export async function load({ params }) {
    const res = await getFullUrl(params.shortUrl);

    if (res.status === "fail") {
        return { status: res.error.status, message: res.message };
    }
    redirect(301, res.data.url.url);
}
