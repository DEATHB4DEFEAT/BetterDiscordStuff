/**
 * @name DeveloperMode
 * @author DEATHB4DEFEAT
 * @version 1.1.4
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
			version: '1.1.4',
			description: 'Makes you able to view the special Discord developer options.',
			github: 'https://github.com/DEATHB4DEFEAT/BetterDiscordStuff/blob/main/DeveloperMode.plugin.js',
			github_raw: 'https://raw.githubusercontent.com/DEATHB4DEFEAT/BetterDiscordStuff/master/DeveloperMode.plugin.js',
		},
	};

	return function () {
		function start() {
			window.___wp = function (e) {
				let id = e.c[Object.keys(e.c).find((k) => e.c[k]?.exports?.default?.isDeveloper === false)];
				if (id) Object.defineProperty(id.exports.default, 'isDeveloper', { get: () => true });
				delete window.___wp;
			};
			webpackChunkdiscord_app.push([['wp_isdev_patch'], {}, window.___wp]);
		}
        function stop() {}
        this.start = start;
        this.stop = stop;
	};
})();
