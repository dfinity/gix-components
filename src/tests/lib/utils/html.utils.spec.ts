import { sanitize } from "../../../lib/utils/html.utils";

describe("html-utils", () => {
  it("should sanitize HTML", () => {
    // Examples from DOMPurify README - https://github.com/cure53/DOMPurify
    expect(sanitize("<img src=x onerror=alert(1)//>")).toEqual('<img src="x">');
    expect(sanitize("<svg><g/onload=alert(2)//<p>")).toEqual(
      "<svg><g></g></svg>"
    );
    expect(
      sanitize("<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>")
    ).toEqual("<p>abc</p>");
    expect(
      sanitize('<math><mi//xlink:href="data:x,<script>alert(4)</script>">')
    ).toEqual("<math><mi></mi></math>");
    expect(sanitize("<TABLE><tr><td>HELLO</tr></TABL>")).toEqual(
      "<table><tbody><tr><td>HELLO</td></tr></tbody></table>"
    );
    expect(sanitize("<UL><li><A HREF=//google.com>click</UL>")).toEqual(
      '<ul><li><a href="//google.com">click</a></li></ul>'
    );
  });
});
