const apiUrl = "http://127.0.0.1:3000/api/v1"; //TODO: move this to .env or sth else

async function apiFetch(
    url,
    {
        body,
        method = body ? "POST" : "GET",
        headers = { "Content-Type": "application/json" },
    }
) {
    const req = await fetch(`${apiUrl}${url}`, {
        body: JSON.stringify(body),
        method,
        headers,
    });
    return req.json();
}

export async function signup(data) {
    return await apiFetch("/users/signup", { body: data });
}

export async function login(data) {
    return await apiFetch("/users/login", { body: data });
}

export async function createShort(url, jwt) {
    console.log(jwt);

    const headers = {
        "Content-Type": "application/json",
    };
    if (jwt) headers["Cookie"] = `jwt=${jwt}`;
    return await apiFetch("/urls/", {
        body: { url },
        headers,
    });
}

export async function getFullUrl(shortUrl) {
    return await apiFetch(`/urls/${shortUrl}`, {});
}
export async function getMyUrls(jwt) {
    return await apiFetch("users/my-urls", {
        headers: {
            "Content-Type": "application/json",
            Cookie: `jwt=${jwt}`,
        },
    });
}

async function main() {
    // let req = await createShort("https://www.youtube.com/watch?v=OnkTUKtxRic");
    // const req = await login({
    //     // name: "mehrad",
    //     email: "mehrad@gmail.con",
    //     password: "thisismypass",
    //     // passwordConfirm: "thisismypass",
    // });
    // const req = await createShort(
    //     "https://www.youtube.com/watch?v=sReGQj67HJU"
    // );
    // console.log(req);
    // console.log(req.data.url.shortUrl);
    // const req2 = await getFullUrl(req.data.url.shortUrl);
    // console.log(req2);
}

// main();
