/**
 * @name DeveloperMode
 * @author DEATHB4DEFEAT
 * @version 1.3.0
 * @description Makes you able to view the special Discord developer options.
 * @source https://github.com/DEATHB4DEFEAT/BetterDiscordStuff/blob/main/DeveloperMode.plugin.js
 * @updateUrl https://raw.githubusercontent.com/DEATHB4DEFEAT/BetterDiscordStuff/master/DeveloperMode.plugin.js
 * @invite 49KeKwXc8g
 */

module.exports = (() => {
	const config = {
		info: {
			name: 'DeveloperMode',
			authors: [
				{
					name: 'DEATHB4DEFEAT',
				},
			],
			version: '1.3.0',
			description: 'Makes you able to view the special Discord developer options.',
			github: 'https://github.com/DEATHB4DEFEAT/BetterDiscordStuff/blob/main/Plugins/DeveloperMode.plugin.js',
			github_raw: 'https://raw.githubusercontent.com/DEATHB4DEFEAT/BetterDiscordStuff/master/Plugins/DeveloperMode.plugin.js',
		},
	};

	return function () {
		function start() {
			let wpRequire;
			window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
			mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
			usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
			nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
			try {
				nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
			} catch (e) {}
			oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
			usermod.exports.default.__proto__.getCurrentUser = () => ({isStaff: () => true})
			nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
			usermod.exports.default.__proto__.getCurrentUser = oldGetUser
		}
		function stop() { }
		this.start = start;
		this.stop = stop;
	};
})();