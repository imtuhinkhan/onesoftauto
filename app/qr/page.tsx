import { permanentRedirect } from "next/navigation";

export default function QrRedirect() {
  permanentRedirect("/welcome-to-osa");
}
