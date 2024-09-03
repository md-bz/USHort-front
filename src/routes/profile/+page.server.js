import { error, redirect } from "@sveltejs/kit";
import { getMe } from "$lib/server/api";

export async function load({ cookies }) {
    const jwt = cookies.get("jwt");
    const myInfo = await getMe(jwt);
    console.log(myInfo);

    if (!jwt) {
        redirect(301, "/login");
    }
    return {};
}
