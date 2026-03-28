#!/usr/bin/env bun
import { $ } from "bun";

const dir = import.meta.dirname;
const root = `${dir}/..`;
await $`tectonic ${dir}/resume.tex --outdir ${root}/public/assets`;
await $`mv ${root}/public/assets/resume.pdf ${root}/public/assets/mark-spicer-resume.pdf`;
