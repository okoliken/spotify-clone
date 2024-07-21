
import root from '../root.svelte';
import { set_building, set_paths, set_private_env, set_public_env, set_version } from '../../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_paths({"base":"","assets":""});
set_version("1721558191796");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n\t<head>\n\t\t<script>(function(H){H.className=H.className.replace(/\\bno-js\\b/,'js')})(document.documentElement)</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>" + message + "</title>\n</head>\n<body>\n\n    <h1>An error has occurred!</h1>\n    <p>Status: " + status + "</p>\n    <p>Message: " + message + "</p>\n    \n</body>\n</html>"
	}
};

export function get_hooks() {
	return {};
}

export { set_building, set_paths, set_private_env, set_public_env };
