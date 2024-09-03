const html = `
<!doctype html>
<html>
  <head>
    <title>RedirectMe - A simple tool for redirecting you.</title>
    <style type="text/css">
      body {
        font-family: monospace;
        font-size: 22px;
        text-align: center;
        word-break: break-all;
      }
      h1 {
        font-size: 100px;
      }
      div {
        margin-top: 100px;
      }
      @media only screen and (max-width: 800px) {
        body {
          font-size: 18px;
        }
        h1 {
          font-size: 60px;
        }
      }
    </style>
  </head>
  <body>
    <h1>RedirectMe</h1>
    <p>A simple tool for redirecting, bought to you by G Man</p>
    <p>Based on work originally by <a href="https://kodieg.com">Kodie Grantham</a></p>
    <p><a href="https://github.com/redazzo/redirectmeto">GitHub</a></p>
    <div>
      <h2>EXAMPLES</h2>
      <p><a href="https://redirectme.matauranga.net/https://www.google.com/search?q=puppies">https://redirectme.matauranga.net/https://www.google.com/search?q=puppies</a></p>
    </div>
  </body>
</html>

`;

export default {
	async fetch(request, env, ctx) {

		var url = new URL(request.url)

		if (url.pathname === "/") {
			return new Response(html, {
				headers: { "Content-Type": "text/html" },
			});
		}

		var redirectUrl = url.pathname.substring(1) + url.search
		return Response.redirect(redirectUrl, 307)
	}
}