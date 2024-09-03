import { createShort } from "$lib/server/api";
import { fail } from "@sveltejs/kit";
import { getMyUrls } from "$lib/server/api";

export async function load({ cookies }) {
    const jwt = cookies.get("jwt");

    if (!jwt) {
        return {};
    }

    const myUrls = await getMyUrls(jwt);
    return {
        urls: myUrls.data.urls,
    };
}

export const actions = {
    shorten: async ({ cookies, request }) => {
        const jwt = cookies.get("jwt");
        const data = await request.formData();
        const url = data.get("url");
        let res = await createShort(url, jwt);
        if (res.status == "success") {
            return {
                url: res.data.url.url,
                shortUrl: res.data.url.shortUrl,
            };
        }
        if (res.status === "fail") {
            return fail(422, { error: res.message });
        }
    },
};
