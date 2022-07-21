import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import { split as SplitEditor } from "react-ace";
import Navbar from '../Navbar';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
function Ide() {
  return (
    <>
    <AceEditor
    mode="java"
    theme="github"
    splits={2}
    orientation="below"
    value={"#include <stdio.h>\nint main() {\n\tint i, j, rows;\n\tprintf('Enter the number of rows: ');\n\tscanf('%d', &rows);\n\tfor (i = 1; i <= rows; ++i) {\n\t\tfor (j = 1; j <= i; ++j) {\n\t\t\tprintf('* ');\n\t\t}\n\t\tprintf('-');\n\t}\n\treturn 0;\n}"}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    width="1900px"
    height="1000px"
    />
    </>
  );
}

export default Ide;
