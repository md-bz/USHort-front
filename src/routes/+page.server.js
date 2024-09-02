import { createShort } from "$lib/server/api";
import { fail } from "@sveltejs/kit";

export const actions = {
    shorten: async ({ cookies, request }) => {
        const jwt = cookies.get("jwt");
        const data = await request.formData();
        const url = data.get("url");
        let res = await createShort(url, jwt);
        console.log(res);

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
