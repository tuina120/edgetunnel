import upstream from "./_worker.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const upgrade = request.headers.get("Upgrade") || "";
    if (url.pathname === "/" && upgrade.toLowerCase() !== "websocket") {
      url.pathname = "/admin";
      return Response.redirect(url.toString(), 302);
    }
    return upstream.fetch(request, env, ctx);
  },
};
