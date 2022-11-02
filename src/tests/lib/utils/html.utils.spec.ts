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

  describe("target=_blank workaround", () => {
    it("should preserve the target attribute", () => {
      expect(
        sanitize(`<a target="_blank" rel="noreferrer" href="/">link</a>`)
      ).toEqual(`<a href="/" rel="noreferrer" target="_blank">link</a>`);
      expect(
        sanitize(`<a target="_blank" rel=" noreferrer " href="/">link</a>`)
      ).toEqual(`<a href="/" rel="noreferrer" target="_blank">link</a>`);
    });

    it('should add "noopener" if rel not set', () => {
      expect(sanitize(`<a target="_blank" href="/">link</a>`)).toEqual(
        `<a href="/" target="_blank" rel="noopener">link</a>`
      );
    });

    it('should replace unknown|insecure rel value with "noopener"', () => {
      expect(
        sanitize(`<a target="_blank" rel="nocloser" href="/">link</a>`)
      ).toEqual(`<a href="/" rel="noopener" target="_blank">link</a>`);
      expect(
        sanitize(
          `<a target="_blank" rel="noopenernoreferrer" href="/">link</a>`
        )
      ).toEqual(`<a href="/" rel="noopener" target="_blank">link</a>`);
    });
  });
});
