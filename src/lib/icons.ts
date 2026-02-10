import Discord from "../components/icons/Discord.svelte";
import Fork from "../components/icons/Fork.svelte";
import GitHub from "../components/icons/GitHub.svelte";
import Link from "../components/icons/Link.svelte";
import Mail from "../components/icons/Mail.svelte";
import Matrix from "../components/icons/Matrix.svelte";
import Modrinth from "../components/icons/Modrinth.svelte";
import Star from "../components/icons/Star.svelte";
import Twitter from "../components/icons/Twitter.svelte";
import Twitch from "../components/icons/Twitch.svelte";
import Youtube from "../components/icons/Youtube.svelte";

export const icons = {
    "discord": Discord,
    "fork": Fork,
    "github": GitHub,
    "link": Link,
    "mail": Mail,
    "matrix": Matrix,
    "modrinth": Modrinth,
    "star": Star,
    "twitter": Twitter,
    "twitch": Twitch,
    "youtube": Youtube
}


function icon(name: string): any {
    if (name.startsWith("link:")) {
        return name.split("link:")[1]
    } else {
        return icons[name]
    }
}

export default icon
