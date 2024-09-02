import { login } from "$lib/server/api";
import { fail, redirect } from "@sveltejs/kit";

const loginFields = [
    { name: "email", type: "email" },
    { name: "password", type: "password" },
];

export function load() {
    return {
        loginFields,
    };
}

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();

        const loginInfo = {};

        loginFields.forEach(
            (field) => (loginInfo[field.name] = data.get(field.name))
        );

        const { email, password } = loginInfo;
        if (!email || !password) {
            return fail(422, { error: "Please provide all the fields" });
        }
        const res = await login(loginInfo);

        if (res.status === "fail") {
            return fail(422, { error: res.message });
        }

        if (res && res.token) {
            cookies.set("jwt", res.token, { path: "/" });
            redirect(302, "profile");
        }
    },
};
