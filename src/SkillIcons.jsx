// Maps each skill name → its official brand icon + brand color.
// Used by the Skills ("Technical Toolkit") section.
import {
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiJavascript,
  SiDjango,
  SiReact,
  SiHtml5,
  SiTensorflow,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGithub,
  SiRaspberrypi,
  SiOpencv,
} from "react-icons/si";
import { FaAws, FaServer } from "react-icons/fa";
import { FiCode, FiActivity, FiCpu, FiSmartphone } from "react-icons/fi";

const MAP = {
  Python: { Icon: SiPython, color: "#3776AB" },
  Java: { Icon: SiOpenjdk, color: "#E76F00" },
  C: { Icon: FiCode, color: "#5b6b7f" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  "JavaScript / TypeScript": { Icon: SiJavascript, color: "#D9A400" },
  Django: { Icon: SiDjango, color: "#0C4B33" },
  "Next.js / React": { Icon: SiReact, color: "#149ECA" },
  "HTML & CSS": { Icon: SiHtml5, color: "#E34F26" },
  "Jetpack Compose": { Icon: FiSmartphone, color: "#4285F4" },
  "TensorFlow / Keras": { Icon: SiTensorflow, color: "#FF6F00" },
  "SQL / PostgreSQL": { Icon: SiPostgresql, color: "#4169E1" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  "AWS (EC2 / S3)": { Icon: FaAws, color: "#FF9900" },
  ServiceNow: { Icon: FaServer, color: "#62D84E" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Git & GitHub": { Icon: SiGithub, color: "#181717" },
  "Networking / iPerf": { Icon: FiActivity, color: "#2563EB" },
  "Raspberry Pi": { Icon: SiRaspberrypi, color: "#A22846" },
  "SIM Modules / RF": { Icon: FiCpu, color: "#0E7490" },
  "OpenCV / OCR": { Icon: SiOpencv, color: "#5C3EE8" },
};

const FALLBACK = { Icon: FiCode, color: "#2563EB" };

export function SkillIcon({ name }) {
  const { Icon, color } = MAP[name] || FALLBACK;
  return <Icon style={{ color }} />;
}

export function skillColor(name) {
  return (MAP[name] || FALLBACK).color;
}
