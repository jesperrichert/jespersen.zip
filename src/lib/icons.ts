import type { Component } from "svelte";
import Discord from "../components/icons/Discord.svelte";

export function icon(name: string): any {
  switch (name) {
    case "discord":
      {
        return Discord;
      }
      break;
    case "fork":
      {
      }
      break;
    case "github":
      {
      }
      break;
    case "link":
      {
      }
      break;
    case "mail":
      {
      }
      break;
    case "matrix":
      {
      }
      break;
    case "modrinth":
      {
      }
      break;
    case "star":
      {
      }
      break;
    case "twitter":
      {
      }
      break;
    case "twitch":
      {
      }
      break;
    case "youtube":
      {
      }
      break;
    default:
      {
        return name
      }
      break;
  }
}
