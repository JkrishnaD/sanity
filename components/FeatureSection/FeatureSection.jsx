"use client";

import React from "react";
import FeaturesSectionGrid from "./FeatureSectionGrid";
import FeaturesSectionList from "./FeatureSectionList";
import { motion } from "motion/react";

export default function FeatureSection() {
  return (
    <motion.div
      className="mx-10"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "easIn", duration: 0.5, delay: 0.6 }}
    >
      <FeaturesSectionGrid />
      <FeaturesSectionList />
    </motion.div>
  );
}
