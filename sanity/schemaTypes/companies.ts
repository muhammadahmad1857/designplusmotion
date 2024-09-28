import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companiesType = defineType({
  name: "companies",
  title: "Companies",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Img",
      name: "img",
      type: "image",
    }),
    defineField({
      title: "Id",
      name: "id",
      type: "number",
    }),
  ],
});
