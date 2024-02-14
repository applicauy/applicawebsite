"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImg from "@/assets/placeholder-img-2.png";
import { avigeaFont } from "@/assets/fonts";
import checkboxIcon from "@/assets/icons/checkbox-icon.svg";
import searchIcon from "@/assets/icons/seach-icon.svg";
import lampIcon from "@/assets/icons/lamp-icon.svg";
import Attribute from "./attribute";
import Button from "../components/button";

export default function ServicesSection() {
  return (
    <Section classNameInner="flex flex-col gap-20">
      <motion.div
        className="flex gap-8"
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="relative w-2/4">
          <Image
            src={placeholderImg}
            className="image"
            height={300}
            width={600}
            alt=""
          />

          <div className="absolute inset-12 top-20 bottom-12 border border-white rounded-tl-[60px] rounded-br-[150px] -z-10"></div>
        </div>

        <div className="flex flex-col gap-8 w-2/4 text-end">
          <h3>
            We specialize in IT staff augmentation services, using an agile
            model to deliver talent in only 72 hours.
          </h3>

          <h2>
            Ready to{" "}
            <strong className={`font-normal ${avigeaFont.className}`}>
              speed up your project?
            </strong>
          </h2>

          <h3 className="text-[--highlight-color]">We make it happen</h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex gap-6"
      >
        <Attribute icon={searchIcon}>
          Pre-vetted & tailor match nearshore IT talent you can count on.
        </Attribute>

        <Attribute icon={lampIcon}>
          Deeper understanding of your needs giving you even better solutions.
        </Attribute>

        <Attribute icon={checkboxIcon}>
          Complete control over your team, its size, billed hours & ongoing
          projects.
        </Attribute>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-20px" }}
        whileInView={{ opacity: 1, x: "0px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col gap-6 px-36 pt-16 pb-9 rounded-full border text-center items-center service-gradient"
      >
        <h2 className="font-medium">
          Find the{" "}
          <strong className={`font-normal ${avigeaFont.className}`}>
            perfect fit
          </strong>{" "}
          for your venture
        </h2>

        <h3>
          Whether you need a specialized skillset, a temporary highly qualified
          developer, a Senior team lead, or just more hands on deck, Our IT
          talents are here to help.
        </h3>

        <Button arrowIconColor="white">Meet our process</Button>
      </motion.div>
    </Section>
  );
}
