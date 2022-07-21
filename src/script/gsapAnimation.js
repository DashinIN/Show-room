import { gsap } from "gsap";

gsap.set("img", { opacity: 0 });
gsap.to("img", { duration: 2, opacity: 0.5 });