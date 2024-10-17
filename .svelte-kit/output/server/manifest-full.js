export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "fruitale/_app",
	assets: new Set([".nojekyll","favicon.png","fonts/kongtext.ttf","images/avocado.jpg","images/banana.jpg","images/blueberry.jpg","images/dragonfruit.jpg","images/dragonfruit_defeated.jpg","images/grapes.jpg","images/lemon.jpg","images/mango.jpg","images/mount-everzest.jpg","images/peach.jpg","images/wishing-well.jpg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CIIz2b8X.js","app":"_app/immutable/entry/app.BhnxRYIw.js","imports":["_app/immutable/entry/start.CIIz2b8X.js","_app/immutable/chunks/entry.wAM5QJ4e.js","_app/immutable/chunks/scheduler.O3HiXru6.js","_app/immutable/chunks/index.CldGiFVe.js","_app/immutable/chunks/paths.Df0Nhky2.js","_app/immutable/entry/app.BhnxRYIw.js","_app/immutable/chunks/scheduler.O3HiXru6.js","_app/immutable/chunks/index.CGav2CNN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/profile/[fruit]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"fruit","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
