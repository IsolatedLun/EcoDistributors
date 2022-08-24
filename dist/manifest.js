export const manifest = {
	appDir: "_app",
	assets: new Set(["icons/tabIcon.svg","images/defaultProfile.png","posty.css","posty.css.map","sassy.css","sassy.css.map"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".map":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-f574f194.js","imports":["_app/immutable/start-f574f194.js","_app/immutable/chunks/index-d9a79891.js","_app/immutable/chunks/index-d827f58a.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "cart",
				pattern: /^\/cart\/?$/,
				names: [],
				types: [],
				path: "/cart",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "products/[...data]",
				pattern: /^\/products(?:\/(.*))?\/?$/,
				names: ["data"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
