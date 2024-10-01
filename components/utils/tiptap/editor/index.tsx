"use client";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import setCodeBlock from "@tiptap/extension-code-block";
import { EditorProvider } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Toolbar from "../toolbar";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({}),
  Highlight.configure({ multicolor: true }),
  setCodeBlock,
  TextAlign.configure({
    types: ["Heading", "paragraph"],
  }),
  Underline,
  BulletList,
  OrderedList,
  Paragraph,
  Text,
  Color,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Heading.configure({ levels: [1, 2, 3] }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    Thats a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isnt that great? And all of that is editable. But wait, theres more. Lets try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. Its only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, thats amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export default function Editor() {
  return (
    <EditorProvider
      slotBefore={<Toolbar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
}
