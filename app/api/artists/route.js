import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
    const token = await getAccessToken();

    //const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

    const artists = [
        {
            name: "Kendrick Lamar",
            spotify_id: "2YZyLoL8N0Wb9xBt1NhZWg",
        },
        {
            name: "Future",
            spotify_id: "1RyvyyTE3xzB2ZywiAwp0i",
        },
        {
            name: "A$AP Rocky",
            spotify_id: "13ubrt8QOOCPljQ2FL1Kca",
        },
        {
            name: "Baby Keem",
            spotify_id: "5SXuuuRpukkTvsLuUknva1",
        },
        {
            name: "Westside Gunn",
            spotify_id: "0ABk515kENDyATUdpCKVfW",
        },
        {
            name: "Key Glock",
            spotify_id: "0RESbWvOMyua0yuyVrztJ5",
        },
        {
            name: "Don Toliver",
            spotify_id: "4Gso3d4CscCijv0lmajZWs",
        },
        {
            name: "Action Bronson",
            spotify_id: "7BMccF0hQFBpP6417k1OtQ",
        },
        {
            name: "JID",
            spotify_id: "6U3ybJ9UHNKEdsH7ktGBZ7",
        },
        {
            name: "Young Thug",
            spotify_id: "50co4Is1HCEo8bhOyUWKpn",
        },
        ];
 
        // Extract the artist IDs
        const artistsIds = artists.map((artist) => artist.spotify_id);

         // Convert the artist IDs to a string
        const artistsString = artistsIds.join(",");

        const artistsResponse = await fetch(
            `https://api.spotify.com/v1/artists?ids=${artistsString}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
   
    const artistsData = await artistsResponse.json();

    return new Response(JSON.stringify(artistsData));
}