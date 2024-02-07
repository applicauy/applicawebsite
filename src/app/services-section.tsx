"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImg from "@/assets/placeholder-img-2.png";
import localFont from "next/font/local";
import { avigeaFont } from "@/assets/fonts";

export default function ServicesSection() {
  return (
    <Section classNameInner="flex gap-8">
      <motion.div
        className="relative w-2/4"
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Image
          src={placeholderImg}
          className="image"
          height={300}
          width={600}
          alt=""
        />

        <div className="absolute inset-12 top-20 bottom-12 border border-white rounded-tl-[60px] rounded-br-[150px] -z-10"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col gap-8 w-2/4 text-end"
      >
        <h3>
          We specialize in IT staff augmentation services, using an agile model
          to deliver talent in only 72 hours.
        </h3>

        <h2>
          Ready to{" "}
          <strong
            className={`font-normal ${avigeaFont.className}`}
            style={{ letterSpacing: "0.1rem" }}
          >
            speed up your project?
          </strong>
        </h2>
      </motion.div>
    </Section>
  );
}
