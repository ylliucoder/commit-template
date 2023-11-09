import prettier from "prettier";
import path from "path";

const buildEslintCommand = (filenames) => `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;
const buildPrettierCommand = (filenames) => `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const eslintExtensions = ["js", "jsx", "ts", "tsx"].join(",");
const prettierExtensions = (await prettier.getSupportInfo()).languages
  .map((language) => language.extensions)
  .flatMap((extensions) => extensions.map((extension) => extension.substring(1)))
  .join(",");

export default {
  [`*.{${eslintExtensions}}`]: [buildEslintCommand],
  [`*.{${prettierExtensions}}`]: [buildPrettierCommand]
};
