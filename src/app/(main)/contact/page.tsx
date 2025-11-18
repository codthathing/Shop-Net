import { Metadata } from "next";
import Loading from "../sneakers/loading";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Page"
  }
}

export default function ContactPage() {
  return <section className="flex-1 lg:flex lg:justify-center lg:items-center">
    <Loading />
  </section>;
}
